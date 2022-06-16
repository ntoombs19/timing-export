import styles from '../styles/Home.module.css';
import SetupSteps from '../src/RootComponents/SetupSteps';
import TimingExport from '../src/RootComponents/TimingExport';
import { useEffect } from 'react';
import { useAppContext } from '../src/contexts/AppContext';
import useStorage from '../src/hooks/util/useStorage';

export default function Home() {
    const { isAuthenticated, setIsAuthenticated } = useAppContext();
    const { getItem } = useStorage();

    useEffect(() => {
        setIsAuthenticated(getItem('jiraToken') && getItem('timingToken'));
    }, [getItem, setIsAuthenticated]);
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {isAuthenticated ? <TimingExport /> : <SetupSteps />}
            </main>
        </div>
    );
}
