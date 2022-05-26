import JiraAuth from '../JiraAuth';
import TimingAuth from '../TimingAuth';
import useSetupSteps from '../../hooks/helpers/useSetupSteps';
import { Stepper, Step, StepLabel, StepContent, Typography } from '@mui/material';

const SetupSteps = (props) => {
    const {
        activeStep,
        handleComplete,
        handleNext,
    } = useSetupSteps(props);

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
            content: (<TimingAuth {...{ handleComplete }} />),
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
