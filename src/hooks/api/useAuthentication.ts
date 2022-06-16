import useStorage from '../util/useStorage';

const useAuthentication = () => {
    const { getItem } = useStorage();

    const isAuthenticated = () =>
        getItem('timingToken') && getItem('jiraToken');

    return {
        isAuthenticated,
    };
};

export default useAuthentication;
