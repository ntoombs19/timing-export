import {
    Card,
    CardContent,
    Stack,
    TextField,
    Snackbar,
    Alert,
    FormHelperText,
} from '@mui/material';
import { Info } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import useTimingAuthentication from '../../hooks/api/timing/useTimingAuthentication';

const TimingAuth = (props: { handleComplete: () => void }) => {
    const { handleFormSubmit, isLoading, authenticationFailed, handleClose } =
        useTimingAuthentication(props);

    return (
        <>
            <Card>
                <CardContent>
                    <form onSubmit={handleFormSubmit} method="POST">
                        <Stack spacing={2}>
                            <TextField
                                name="timingToken"
                                label="Timing API Token"
                                type="Password"
                                required
                            ></TextField>
                            <FormHelperText>
                                <a
                                    href="https://web.timingapp.com/integrations/tokens"
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
                                    <Info
                                        color={'primary'}
                                        sx={{
                                            fontSize: '14px',
                                        }}
                                    ></Info>{' '}
                                    Where to find Timing API Token?
                                </a>
                            </FormHelperText>
                            <LoadingButton
                                id="authenticate_timing"
                                type="submit"
                                variant="contained"
                                size="large"
                                loading={isLoading}
                                loadingPosition="center"
                            >
                                Authenticate Timing
                            </LoadingButton>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
            <Snackbar
                open={authenticationFailed}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleClose} severity="error">
                    Timing Authentication Failed
                </Alert>
            </Snackbar>
        </>
    );
};

export default TimingAuth;
