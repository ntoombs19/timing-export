import JiraAuth from '../../components/JiraAuth';
import TimingAuth from '../../components/TimingAuth';
import useSetupSteps from '../../hooks/useSetupSteps';
import {
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Typography,
} from '@mui/material';

const SetupSteps = () => {
    const { activeStep, handleComplete, handleNext } = useSetupSteps();

    const steps = [
        // TODO: Add 'Install Timing Export' step
        // {
        //     label: 'Install Timing Export',
        //     content: '',
        // },
        {
            label: 'Authenticate with Jira',
            content: <JiraAuth {...{ handleNext }} />,
            caption: 'Enter your Personal Access Token to continue',
        },
        {
            label: 'Authenticate with Timing',
            content: <TimingAuth {...{ handleComplete }} />,
        },
    ];

    return (
        <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step) => (
                <Step key={step.label}>
                    <StepLabel
                        optional={
                            step.caption ? (
                                <Typography variant="caption">
                                    {step.caption}
                                </Typography>
                            ) : null
                        }
                    >
                        {step.label}
                    </StepLabel>
                    <StepContent>{step.content}</StepContent>
                </Step>
            ))}
        </Stepper>
    );
};

export default SetupSteps;
