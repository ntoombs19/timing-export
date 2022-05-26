import { useCallback, useState } from 'react';
import useStorage from '../../util/useStorage';
import moment from 'moment';

const useAuthentication = (props) => {
    const {
        getItem,
        setItem,
    } = useStorage();

    const {
        handleComplete,
    } = props;

    const [ isLoading, setIsLoading ] = useState(false);
    const [ authenticationFailed, setAuthenticationFailed ] = useState(false);
    const today = moment().format('YYYY-MM-DD');

    const handleFormSubmit = useCallback((e) => {
        e.preventDefault();
        setItem('timingToken', e.currentTarget.token.value);
        (async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`https://web.timingapp.com/api/v1/time-entries?start_date_min=${today}&start_date_max=${today}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${getItem('timingToken')}`,
                    },
                });
                setIsLoading(false);
                if (response.ok)
                    handleComplete();
                else
                    setAuthenticationFailed(true);
            } catch (e) {
                setAuthenticationFailed(true);
                process.env.NODE_ENV === 'development' ? console.error(e.message) : null;
            }
        })();
    }, [setItem, getItem, handleComplete]);

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
