import Lottie from 'lottie-react';
import DUMMY from '../Assets/bible.json';

const Step7Form = (props) => {
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
            <Lottie animationData={DUMMY} />
            <button>두근두근 나의 성경 말씀은?</button>
        </>
    );
};

export default Step7Form;
