import { SetStateAction, useCallback, useState } from 'react';
import useStorage from '../../util/useStorage';

type Props = {
    handleNext: () => SetStateAction<number>
}

const useAuthentication = ({ handleNext }: Props) => {
    const {
        getItem,
        setItem,
    } = useStorage();

    const [ isLoading, setIsLoading ] = useState(false);
    const [ authenticationFailed, setAuthenticationFailed ] = useState(false);

    const handleFormSubmit = useCallback((e) => {
        e.preventDefault();
        setItem('personalAccessToken', e.currentTarget.pat.value);
        (async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://jira.classyllama.com/rest/api/2/myself', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${getItem('personalAccessToken')}`,
                    },
                    redirect: 'follow',
                });
                setIsLoading(false);
                if (response.ok)
                    handleNext();
                 else 
                    setAuthenticationFailed(true);
            } catch (e : Exception) {
                setAuthenticationFailed(true);
                process.env.NODE_ENV === 'development' ? console.error(e.message) : null;
            }
        })();
    }, [setItem, getItem, handleNext]);

    const handleClose = () => {
        setAuthenticationFailed(false);
    };

    return {
        handleFormSubmit,
        isLoading,
        authenticationFailed,
        handleClose,
    };
};

export default useAuthentication;
