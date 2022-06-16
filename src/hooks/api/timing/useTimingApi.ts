import useStorage from '../../util/useStorage';
import { Dispatch, SetStateAction } from 'react';

const useTimingApi = (props: {
    setTimeEntries: Dispatch<SetStateAction<object>>;
}) => {
    const { getItem } = useStorage();
    const { setTimeEntries } = props;

    const getTimeEntries = async () => {
        const requestOptions = <RequestInit>{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getItem('timingToken')}`,
            },
            redirect: 'follow',
        };

        const response = await fetch(
            'https://web.timingapp.com/api/v1/time-entries?start_date_min=2022-05-26&start_date_max=2022-05-31',
            requestOptions,
        );

        if (response.ok) {
            const entries = await response.json();
            setTimeEntries(entries);
        }
    };

    return {
        getTimeEntries,
    };
};

export default useTimingApi;
