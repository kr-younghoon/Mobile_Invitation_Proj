// import Lottie from 'lottie-react';
// import DUMMY from '../Assets/bible.json';

import { useEffect, useState } from 'react';
// import db from '../../firebase'; // Firebase 초기화 코드가 있는 파일 경로를 수정하세요.
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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

function Step7Form(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [randomVerse, setRandomVerse] = useState({});

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
                        <h2>랜덤으로 생성된 내용</h2>
                        {/* <p> {randomVerse} </p> */}
                        <p>말씀 구절: {randomVerse.말씀구절}</p>
                        <p>말씀 본문: {randomVerse.말씀본문}</p>
                        <p>영어 본문: {randomVerse.영어본문}</p>

                        {/* <p>{randomText}</p> */}
                        {/* <img src={randomImageURL} alt="Random" /> */}
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
