const Step8Form = (props) => {
    return (
        <>
            <h1>
                아멘! 말씀대로 되길
                <br />
                소망합니다!
            </h1>
            <h1>
                {props.userName} 님을
                <br />
                {props.tag} {props.inviterName}
                <br />
                청년과 함께 11/5
                <br />
                교회에서 볼 수 있기를
                <br />
                기대하겠습니다.
                <br />
                <button>방명록 작성하기</button>
            </h1>
        </>
    );
};

export default Step8Form;
