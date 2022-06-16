import { useState, SetStateAction } from 'react';
import { useAppContext } from '../contexts/AppContext';
const useSetupSteps = () => {
    const [activeStep, setActiveStep] = useState(0);
    const { setIsAuthenticated } = useAppContext();

    const handleNext = (): SetStateAction<number> => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        return activeStep;
    };

    const handleBack = (): void => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = (): void => {
        setActiveStep(0);
    };

    const handleComplete = (): void => {
        setIsAuthenticated(true);
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
