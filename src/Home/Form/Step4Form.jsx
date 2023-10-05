const Step4Form = (props) => {
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
                <input></input>입니다.
            </h2>
        </>
    );
};

export default Step4Form;
