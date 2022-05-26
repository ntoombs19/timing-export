import {
    Card,
    CardContent,
    Stack,
    TextField,
    Snackbar,
    Alert,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useAuthentication from '../../hooks/api/timing/useAuthentication';

const TimingAuth = (props: any) => {
    const {
        handleFormSubmit,
        isLoading,
        authenticationFailed,
        handleClose,
    } = useAuthentication(props);

    return (
        <>
            <Card>
                <CardContent>
                    <form onSubmit={handleFormSubmit} method='POST'>
                        <Stack spacing={2}>
                            <TextField name='token'
                                       label='Timing API Token'
                                       type='Password'
                                       required
                            ></TextField>
                            {/* <FormHelperText>*/}
                            {/*    <a*/}
                            {/*        href='https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html#UsingPersonalAccessTokens-CreatingPATsinapplication'*/}
                            {/*        target={'_blank'} rel="noreferrer">*/}
                            {/*        <Info color={'primary'} fontSize={'14'}></Info> Where to find your Jira Personal Access Token?*/}
                            {/*    </a>*/}
                            {/* </FormHelperText>*/}
                            <LoadingButton
                                type='submit'
                                variant='contained'
                                size='large'
                                loading={isLoading}
                                loadingPosition='center'
                            >
                                Authenticate
                            </LoadingButton>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
            <Snackbar open={authenticationFailed} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="error">
                    Timing Authentication Failed
                </Alert>
            </Snackbar>
        </>
    );
};

export default TimingAuth;
