import {
    Card,
    CardContent,
    Stack,
    TextField,
    FormHelperText,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Info } from '@mui/icons-material';
import useAuthentication from '../../hooks/api/jira/useAuthentication';
import React, { SetStateAction } from 'react';

type Props = {
    handleNext: () => SetStateAction<number>
}

const JiraAuth = (props: Props) => {
    const {
        handleFormSubmit,
        isLoading,
    } = useAuthentication(props);

    return (
        <Card>
            <CardContent>
                <form onSubmit={handleFormSubmit} method='POST'>
                    <Stack spacing={2}>
                        <TextField name='pat'
                                   label='Personal Access Token'
                                   type='Password'
                                   required
                        ></TextField>
                        <FormHelperText>
                            <a
                                href='https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html#UsingPersonalAccessTokens-CreatingPATsinapplication'
                                target={'_blank'} rel="noreferrer">
                                <Info color={'primary'} fontSize={'14'}></Info> Where to find your Jira Personal Access Token?
                            </a>
                        </FormHelperText>
                        <LoadingButton
                            type='submit'
                            variant='contained'
                            size='large'
                            loading={isLoading}
                            loadingPosition='start'
                        >
                            {isLoading ? 'Authenticating' : 'Authenticate'}
                        </LoadingButton>
                    </Stack>
                </form>
            </CardContent>
        </Card>
    );
};

export default JiraAuth;
