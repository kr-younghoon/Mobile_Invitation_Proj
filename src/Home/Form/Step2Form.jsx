import { useState } from 'react';

function Step2Form(props) {
    // Step 2의 폼 컴포넌트 내용을 구현
    const [selectedRelationship, setSelectedRelationship] = useState();

    const handleNext = () => {
        if (selectedRelationship) {
            // 사용자가 선택한 값을 부모 컴포넌트로 전달
            props.onDataReceived(selectedRelationship);
        }
    };

    return (
        <div>
            <h1>
                {props.inviterName} 청년과 <br />
                어떤 사이인가요?
            </h1>
            <form>
                <label>
                    <input
                        type="radio"
                        name="relationship"
                        value="가족"
                        onChange={(e) =>
                            setSelectedRelationship(e.target.value)
                        }
                    />
                    가족
                </label>

                <label>
                    <input
                        type="radio"
                        name="relationship"
                        value="친구"
                        onChange={(e) =>
                            setSelectedRelationship(e.target.value)
                        }
                    />
                    친구
                </label>

                <label>
                    <input
                        type="radio"
                        name="relationship"
                        value="친척"
                        onChange={(e) =>
                            setSelectedRelationship(e.target.value)
                        }
                    />
                    친척
                </label>

                <label>
                    <input
                        type="radio"
                        name="relationship"
                        value="직장동료"
                        onChange={(e) =>
                            setSelectedRelationship(e.target.value)
                        }
                    />
                    직장동료
                </label>

                <label>
                    <input
                        type="radio"
                        name="relationship"
                        value="선,후배"
                        onChange={(e) =>
                            setSelectedRelationship(e.target.value)
                        }
                    />
                    선배, 후배
                </label>

                <label>
                    <input
                        type="radio"
                        name="relationship"
                        value="이웃"
                        onChange={(e) =>
                            setSelectedRelationship(e.target.value)
                        }
                    />
                    이웃
                </label>
            </form>
            <button type="submit" onClick={handleNext}>
                제출
            </button>
        </div>
    );
}

export default Step2Form;
