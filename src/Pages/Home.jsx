import React, { useState } from 'react';
import Step1Form from '../Home/Form/Step1Form';
import Step2Form from '../Home/Form/Step2Form';
import Step3Form from '../Home/Form/Step3Form';
import Step4Form from '../Home/Form/Step4Form';
import Step5Form from '../Home/Form/Step5Form';
import Step6Form from '../Home/Form/Step6Form';
import Step7Form from '../Home/Form/Step7Form';
import Step8Form from '../Home/Form/Step8Form';
import Lottie from 'lottie-react';
import DUMMY from '../Home/Assets/bible.json';

function Home() {
    const [step, setStep] = useState(1);
    const [caller, setCaller] = useState({});
    const [selectTag, setSelectTag] = useState({});

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const oninviterNameReceived = (data) => {
        setCaller({ ...caller, step1Data: data });
        nextStep();
    };

    const onSeletedTagReceived = (data) => {
        setSelectTag({ ...selectTag, step2Data: data });
        nextStep();
        console.log(data);
        console.log(selectTag.step2DataS);
    };

    let inviterName = caller.step1Data;
    let userName = '김현아';
    let tag = '💦킹받는';
    let relationship = selectTag.step2Data;

    return (
        <div>
            {step === 1 && (
                <Step1Form oninviterNameReceived={oninviterNameReceived} />
            )}
            {step === 2 && (
                <Step2Form
                    onDataReceived={onSeletedTagReceived}
                    inviterName={inviterName}
                />
            )}
            {step === 3 && <Step3Form inviterName={inviterName} />}
            {step === 4 && (
                <Step4Form
                    inviterName={inviterName}
                    tag={tag}
                    relationship={relationship}
                />
            )}
            {step === 5 && (
                <Step5Form
                    inviterName={inviterName}
                    tag={tag}
                    relationship={relationship}
                    userName={userName}
                />
            )}
            {step === 6 && <Step6Form />}
            {step === 7 && <Step7Form userName={userName} />}
            {step === 8 && (
                <Step8Form
                    inviterName={inviterName}
                    userName={userName}
                    tag={tag}
                />
            )}

            <div>
                {/* Step7에 대한 폼(로티에 대한 것 때문에 코드를 여기서 작성해야할꺼 같다.) */}
                {step === 7 && <Lottie animationData={DUMMY} />}
                {step > 1 && <button onClick={prevStep}>이전 단계</button>}
                {step < 8 && <button onClick={nextStep}>다음 단계</button>}
            </div>
        </div>
    );
}

export default Home;
