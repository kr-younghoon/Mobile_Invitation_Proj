import { useState } from 'react';

const Step4Form = (props) => {
    const [whtsURName, setWhtsURName] = useState([]);

    const handleKeywordChange = (e) => {
        //     const username = e.target.value;
        setWhtsURName(e.target.value);
    };

    const handleNext = () => {
        // 선택한 키워드 배열을 부모 컴포넌트로 전달
        props.onUserNameReceived(whtsURName);
    };

    return (
        <>
            <h1>
                당신의 이름도 <br /> 알려주실 수 있나요?
            </h1>
            <h2>
                저는 {props.tag}
                <br />
                {props.inviterName} 청년의 {props.relationship}
                <br />
                <input onChange={handleKeywordChange}></input>입니다.
                <button onClick={handleNext}>다음 단계</button>
            </h2>
        </>
    );
};

export default Step4Form;
