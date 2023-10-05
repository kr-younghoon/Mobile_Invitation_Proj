import { useState } from 'react';

const Step3Form = (props) => {
    // Step 3의 폼 컴포넌트 내용을 구현
    const [selectedKeywords, setSelectedKeywords] = useState([]);

    const handleKeywordChange = (e) => {
        const keyword = e.target.value;
        // 선택한 키워드가 이미 배열에 있다면 제거하고, 없다면 추가
        if (selectedKeywords.includes(keyword)) {
            setSelectedKeywords(
                selectedKeywords.filter((kw) => kw !== keyword)
            );
        } else {
            setSelectedKeywords([...selectedKeywords, keyword]);
        }
    };

    const handleNext = () => {
        // 선택한 키워드 배열을 부모 컴포넌트로 전달
        props.onKeywordsReceived(selectedKeywords);
    };

    return (
        <div>
            <h1>
                {props.inviterName} 청년은
                <br />
                어떤 사람인가요?
            </h1>
            <h5>어울리는 키워드를 모두 골라주세요!</h5>
            <label>
                <input
                    type="checkbox"
                    name="kind"
                    value="😄 친절한"
                    onChange={handleKeywordChange}
                />
                😄 친절한
            </label>
            <label>
                <input
                    type="checkbox"
                    name="kind"
                    value="👶🏻 귀여운"
                    onChange={handleKeywordChange}
                />
                👶🏻 귀여운
            </label>
            <label>
                <input
                    type="checkbox"
                    name="kind"
                    value="💕 사랑스러운"
                    onChange={handleKeywordChange}
                />
                💕 사랑스러운
            </label>
            <label>
                <input
                    type="checkbox"
                    name="kind"
                    value="🐜 성실한"
                    onChange={handleKeywordChange}
                />
                🐜 성실한
            </label>
            <label>
                <input
                    type="checkbox"
                    name="kind"
                    value="👔 예의바른"
                    onChange={handleKeywordChange}
                />{' '}
                👔 예의바른
            </label>
            <label>
                <input
                    type="checkbox"
                    name="kind"
                    value="📚 똑똑한"
                    onChange={handleKeywordChange}
                />
                📚 똑똑한
            </label>
            <label>
                <input
                    type="checkbox"
                    name="kind"
                    value="👩🏻‍🎤 사차원"
                    onChange={handleKeywordChange}
                />
                👩🏻‍🎤 사차원
            </label>
            <label>
                <input
                    type="checkbox"
                    name="kind"
                    value="🤴🏻 왕자"
                    onChange={handleKeywordChange}
                />
                🤴🏻 왕자
            </label>
            <label>
                <input
                    type="checkbox"
                    name="kind"
                    value="👸🏻 공주"
                    onChange={handleKeywordChange}
                />
                👸🏻 공주
            </label>
            <label>
                <input
                    type="checkbox"
                    name="kind"
                    value="👨🏻‍💻 워커홀릭"
                    onChange={handleKeywordChange}
                />
                👨🏻‍💻 워커홀릭
            </label>
            <label>
                <input
                    type="checkbox"
                    name="kind"
                    value="💒 예수쟁이"
                    onChange={handleKeywordChange}
                />
                💒 예수쟁이
            </label>
            <label>
                <input
                    type="checkbox"
                    name="kind"
                    value="🤹‍♀️ 재밌는"
                    onChange={handleKeywordChange}
                />
                🤹‍♀️ 재밌는
            </label>
            <label>
                <input
                    type="checkbox"
                    name="kind"
                    value="🗑 쓰레기"
                    onChange={handleKeywordChange}
                />
                🗑 쓰레기
            </label>
            <label>
                <input
                    type="checkbox"
                    name="kind"
                    value="🍷 알코올 중독자"
                    onChange={handleKeywordChange}
                />
                🍷 알코올 중독자
            </label>
            <label>
                <input
                    type="checkbox"
                    name="kind"
                    value="💦 킹받는"
                    onChange={handleKeywordChange}
                />
                💦 킹받는
            </label>
            <button onClick={handleNext}>다음 단계로 이동</button>
        </div>
    );
};

export default Step3Form;
