import React, { useState } from 'react';

function Step1Form(props) {
    // Step 1의 폼 컴포넌트 내용을 구현
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            {/* 폼 요소들을 추가 */}
            <h1>
                안녕하세요
                <br />
                만나서 반갑습니다.
            </h1>
            <h1>당신을 초대한 사람은 누구인가요?</h1>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => props.oninviterNameReceived(inputValue)}>
                다음 단계
            </button>
        </div>
    );
}

export default Step1Form;
