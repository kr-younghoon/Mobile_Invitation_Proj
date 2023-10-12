import { useState, useRef, useEffect } from 'react';
import styles from './Reviews.module.css';
import WriteBtn from '../Home/Assets/SVG/WriteBtn';
import CloseBtn from '../Home/Assets/SVG/CloseBtn';
import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    serverTimestamp,
} from 'firebase/firestore'; // Firestore 모듈에서 필요한 함수 가져오기

// Firebase 구성 객체
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
    databaseURL: process.env.REACT_APP_databaseURL,
};

const app = initializeApp(firebaseConfig); // Firebase 초기화
const firestore = getFirestore(app); // Firestore 객체 가져오기

function Reviews() {
    const [isBtnOpen, setIsBtnOpen] = useState(true);
    const [comment, setComment] = useState(''); // State to store the comment text
    const [writtenBy, setWrittenBy] = useState(''); // State to store the 'written by' text
    const [comments, setComments] = useState([]); // State to store comments

    const textareaRef = useRef(null);
    const writtenByRef = useRef(null);

    const commentsCollection = collection(firestore, 'comments'); // Define the CollectionReference

    const openBtn = async () => {
        setIsBtnOpen(false);
    };

    const closeBtn = () => {
        setIsBtnOpen(true);
        setComment(''); // Clear the comment text when closing the textarea
        setWrittenBy('');
    };

    const handleTextareaInput = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // 높이를 초기값(auto)로 설정
            textareaRef.current.style.height =
                textareaRef.current.scrollHeight + 'px'; // 스크롤 높이에 따라 높이 조절
        }
    };

    const handleTextareaKeyDown = (event) => {
        // 엔터키(키 코드 13)를 눌렀을 때 handleCommentSubmit 함수를 호출합니다.
        if (event.keyCode === 13) {
            uploadCommentReply(event);
        }
    };

    const uploadCommentReply = async () => {
        try {
            if (comment.trim() !== '') {
                await addDoc(commentsCollection, {
                    text: comment,
                    writtenBy: writtenBy,
                    timestamp: serverTimestamp(),
                });
                setComment('');
                setWrittenBy('');
                console.log('Comment uploaded successfully');
            }
        } catch (error) {
            console.error('Error uploading comment reply:', error);
        }
    };

    const fetchComments = async () => {
        try {
            console.log('fetchComments');
            const querySnapshot = await getDocs(commentsCollection);
            const commentsData = [];
            querySnapshot.forEach((doc) => {
                commentsData.push(doc.data());
            });
            setComments(commentsData);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    useEffect(() => {
        fetchComments();
        // eslint-disable-next-line
    }, []);

    const handleInputComplete = () => {
        uploadCommentReply();
    };

    return (
        <>
            <p className={styles.sub_lg}>
                자유롭게 작성하는
                <br />
                게시판입니다.
            </p>
            {isBtnOpen ? (
                <button className={styles.next_button} onClick={openBtn}>
                    <p className={styles.next_step_text_black}>작성하기</p>
                    <WriteBtn />
                </button>
            ) : (
                <div>
                    <button className={styles.next_button} onClick={closeBtn}>
                        <p className={styles.next_step_text_black}>취소</p>
                        <CloseBtn />
                    </button>
                    <div className={styles.txtareaLayout}>
                        <textarea
                            id="myTextarea"
                            ref={textareaRef}
                            onInput={handleTextareaInput}
                            onKeyDown={handleTextareaKeyDown} // 엔터키 이벤트 핸들러 추가
                            placeholder="여기에 글을 작성해주세요."
                            value={comment} // Bind the textarea value to the comment state
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        <p>
                            written by.
                            <input
                                ref={writtenByRef}
                                value={writtenBy}
                                onChange={(e) => setWrittenBy(e.target.value)}
                            />
                        </p>
                        <button onClick={handleInputComplete}>입력 완료</button>
                    </div>
                </div>
            )}
            {/* Display comments */}
            <div className={styles.commentsHeaderLayout}>
                {comments.map((comment, index) => (
                    <>
                        <div key={index} className={styles.comment_item}>
                            <p className={styles.sub_sm}>{comment.text}</p>
                            <p className={styles.sub_cap}>
                                written by. {comment.writtenBy}
                            </p>
                        </div>
                        <div className={styles.comment_line} />
                    </>
                ))}
            </div>
        </>
    );
}

export default Reviews;
