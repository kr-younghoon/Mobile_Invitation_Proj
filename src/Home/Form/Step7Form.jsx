// import Lottie from 'lottie-react';
// import DUMMY from '../Assets/bible.json';

import { useEffect, useState } from 'react';
// import db from '../../firebase'; // Firebase 초기화 코드가 있는 파일 경로를 수정하세요.
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: 'AIzaSyAtZ8R-R8UHeh3G3QZI8JEtg4nbCpLiCsw',
    authDomain: 'mobileinvitation-f5217.firebaseapp.com',
    projectId: 'mobileinvitation-f5217',
    storageBucket: 'mobileinvitation-f5217.appspot.com',
    messagingSenderId: '630019112277',
    appId: '1:630019112277:web:e930e3643434242d75c3dc',
    measurementId: 'G-GDCM6DC1SM',
    databaseURL:
        'https://mobileinvitation-f5217-default-rtdb.asia-southeast1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

function Step7Form(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [randomVerse, setRandomVerse] = useState({});
    const [urlPath, setUrlPath] = useState('');
    // const [imgName, setImgName] = useState('');

    const openModal = async () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchRandomVerse = async () => {
            try {
                const bibleCollection = collection(db, 'Bible');
                const querySnapshot = await getDocs(bibleCollection);
                // console.log('querySnapshot:', querySnapshot);

                // if (querySnapshot) {
                //     throw new Error('Firestore 컬렉션에 데이터가 없습니다.');
                // }

                const randomIndex = Math.floor(
                    Math.random() * querySnapshot.docs.length
                );
                const randomDoc = querySnapshot.docs[randomIndex];
                const data = randomDoc.data();

                console.log('말씀 구절:', data.말씀구절);

                setRandomVerse(data);
            } catch (error) {
                console.error('Firestore 데이터 가져오기 오류 : ', error);
            }
        };

        fetchRandomVerse();
    }, []);

    // 이미지 URL 확인
    const imgNameSet = '1';

    const imageUrl = `images/${imgNameSet}.jpeg`; // 실제 이미지 경로에 맞게 설정

    const checkImageUrl = async () => {
        try {
            const imageRef = ref(storage, imageUrl);
            const url = await getDownloadURL(imageRef);

            console.log('이미지 URL:', url);

            setUrlPath(url);
        } catch (error) {
            console.error('이미지 로드 중 오류 발생:', error);
        }
    };

    // 이미지 URL 확인 함수 호출
    checkImageUrl();

    return (
        <>
            <h1>
                마지막으로,
                <br />
                {props.userName}님을
                <br />
                축복하기 위해
                <br />
                성경 말씀 한 구절
                <br />
                준비했어요!
            </h1>
            {/* <Lottie animationData={DUMMY} /> */}
            <button onClick={openModal}>두근두근 나의 성경 말씀은?</button>

            {isModalOpen && (
                <div>
                    <div>
                        <div>
                            <p>{randomVerse.말씀구절}</p>
                            <p>{randomVerse.말씀본문}</p>
                            <p>{randomVerse.영어본문}</p>
                            <img src={urlPath} alt="Random" />
                        </div>

                        <button
                        // onClick={handleCombineAndDownload}
                        >
                            다운로드
                        </button>
                        <button onClick={closeModal}>닫기</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Step7Form;
