import JiraAuth from '../JiraAuth';
import useSetupSteps from '../../hooks/helpers/useSetupSteps';
import { Stepper, Step, StepLabel, StepContent, Typography, Button } from '@mui/material';

const SetupSteps = () => {
    const {
        activeStep,
        handleNext,
        handleBack,
    } = useSetupSteps();

    const steps = [
        // TODO: Add 'Install Timing Export' step
        // {
        //     label: 'Install Timing Export',
        //     content: '',
        // },
        {
            label: 'Authenticate with Jira',
            content: (<JiraAuth {...{ handleNext }} />),
            caption: 'Enter your Personal Access Token to continue',
            complete: '',
        },
        {
            label: 'Authenticate with Timing',
            content: (<Button variant='contained' size='large' onClick={handleBack}>Go Back</Button>),
            complete: '',
        },
    ];

    return (
        <Stepper activeStep={activeStep} orientation="vertical">
            { steps.map((step) => (
                <Step key={step.label}>
                    <StepLabel
                        optional={
                            step.caption ? (
                                <Typography variant="caption">{step.caption}</Typography>
                            ) : null
                        }
                    >
                        {step.label}
                    </StepLabel>
                    <StepContent>
                        {step.content}
                    </StepContent>
                </Step>
            ))}
        </Stepper>
    );
};

export default SetupSteps;
