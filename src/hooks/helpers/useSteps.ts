import { useState } from 'react';

const useSteps = () => {
    const [
        activeStep,
        setActiveStep,
    ] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return {
        activeStep,
        setActiveStep,
        handleNext,
        handleBack,
        handleReset,
    };
};

export default useSteps;
