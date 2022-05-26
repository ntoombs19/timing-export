import { useState } from 'react';
const useSetupSteps = (props) => {
    const [activeStep, setActiveStep] = useState(0);
    const { setSetupComplete } = props;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleComplete = () => {
        setSetupComplete(true);
    };

    return {
        activeStep,
        setActiveStep,
        handleNext,
        handleBack,
        handleReset,
        handleComplete,
    };
};

export default useSetupSteps;
