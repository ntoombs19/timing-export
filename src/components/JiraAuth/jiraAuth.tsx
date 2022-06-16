import {
    Card,
    CardContent,
    Stack,
    TextField,
    FormHelperText,
    Snackbar,
    Alert,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Info } from '@mui/icons-material';
import useJiraAuthentication from '../../hooks/api/jira/useJiraAuthentication';
import React from 'react';

const JiraAuth = (props: {
    handleNext: () => React.SetStateAction<number>;
}) => {
    const { handleFormSubmit, isLoading, authenticationFailed, handleClose } =
        useJiraAuthentication(props);

    return (
        <>
            <Card>
                <CardContent>
                    <form onSubmit={handleFormSubmit} method="POST">
                        <Stack spacing={2}>
                            <TextField
                                name="jiraToken"
                                label="Jira API Token"
                                type="Password"
                                required
                            ></TextField>
                            <FormHelperText>
                                <a
                                    href="https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html#UsingPersonalAccessTokens-CreatingPATsinapplication"
                                    target={'_blank'}
                                    rel="noreferrer"
                                >
                                    <Info
                                        color={'primary'}
                                        sx={{
                                            fontSize: 14,
                                        }}
                                    ></Info>{' '}
                                    Where to find your Jira Personal Access
                                    Token?
                                </a>
                            </FormHelperText>
                            <LoadingButton
                                id="authenticate_jira"
                                type="submit"
                                variant="contained"
                                size="large"
                                loading={isLoading}
                                loadingPosition="center"
                            >
                                Authenticate
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
                    Jira Authentication Failed
                </Alert>
            </Snackbar>
        </>
    );
};

export default JiraAuth;
