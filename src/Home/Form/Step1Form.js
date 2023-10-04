import AskInviter from '../Components/Input/AskInviter';

const Step1Form = () => {
    // Step 1의 폼 컴포넌트 내용을 구현
    return (
        <div>
            {/* 폼 요소들을 추가 */}
            <h1>
                안녕하세요
                <br />
                만나서 반갑습니다.
            </h1>
            {/* [예정] useState로 Boolean값을 전달하여 Input값 전달시 다음으로 버튼 활성화 되는 부분 만들어야함 */}
            <AskInviter />
        </div>
    );
};

export default Step1Form;
