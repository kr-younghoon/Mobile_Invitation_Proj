import RelationshipSelector from '../Components/Input/RelationshipSelector';

function Step2Form(props) {
    // Step 2의 폼 컴포넌트 내용을 구현
    return (
        <div>
            <h1>
                {props.inviterName}청년과 <br />
                어떤 사이인가요?
            </h1>
            <RelationshipSelector />
        </div>
    );
}

export default Step2Form;
