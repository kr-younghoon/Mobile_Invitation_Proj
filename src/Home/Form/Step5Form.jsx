const Step5Form = (props) => {
    return (
        <>
            <h1>
                우리는 11월 5일 <br />
                *특별한 예배를
            </h1>
            <h5>:청년들이 자신의 소중한 사람들을 초청하는 예배</h5>
            <h1>
                준비했어요.
                <br />
                {props.tag} {props.inviterName}
                <br />
                청년의 {props.relationship}인
                <br />
                {props.userName}
                <br />꼭 만나고 싶어요!
            </h1>
        </>
    );
};

export default Step5Form;
