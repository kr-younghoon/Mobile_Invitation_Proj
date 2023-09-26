import React, { useState } from 'react';
import Step1Form from './StepForm/Step1Form';
import Step2Form from './StepForm/Step2Form';
import Step3Form from './StepForm/Step3Form';

const MultiStepForm = () => {
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

            <div>
                {step > 1 && <button onClick={prevStep}>이전 단계</button>}
                {step < 3 && <button onClick={nextStep}>다음 단계</button>}
            </div>
        </div>
    );
};

export default MultiStepForm;
