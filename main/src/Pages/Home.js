import React, { useState } from 'react';
import Step1Form from '../Home/Step1Form';
import Step2Form from '../Home/Step2Form';
import Step3Form from '../Home/Step3Form';
import Step4Form from '../Home/Step4Form';
import Step5Form from '../Home/Step5Form';
import Step6Form from '../Home/Step6Form';
import Step7Form from '../Home/Step7Form';
import Step8Form from '../Home/Step8Form';

const Home = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <div>
            {step === 1 && <Step1Form />}
            {step === 2 && <Step2Form />}
            {step === 3 && <Step3Form />}
            {step === 4 && <Step4Form />}
            {step === 5 && <Step5Form />}
            {step === 6 && <Step6Form />}
            {step === 7 && <Step7Form />}
            {step === 8 && <Step8Form />}

            <div>
                {step > 1 && <button onClick={prevStep}>이전 단계</button>}
                {step < 8 && <button onClick={nextStep}>다음 단계</button>}
            </div>
        </div>
    );
};

export default Home;
