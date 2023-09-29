import PersonTraitsSelector from './Components/Input/PersonTraitsSelector';

const Step3Form = () => {
    // Step 3의 폼 컴포넌트 내용을 구현
    return (
        <div>
            <h1>
                "name" 청년은
                <br />
                어떤 사람인가요?
            </h1>
            <h5>어울리는 키워드를 모두 골라주세요!</h5>
            <PersonTraitsSelector />
        </div>
    );
};

export default Step3Form;
