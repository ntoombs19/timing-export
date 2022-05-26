import styles from '../styles/Home.module.css';
import SetupSteps from '../src/components/SetupSteps';
import { useState } from 'react';

export default function Home() {
    const [setupComplete, setSetupComplete] = useState(false);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                { setupComplete
                    ? <h1>Setup Complete</h1>
                    : <SetupSteps {...{ setSetupComplete }} />
                }
            </main>
        </div>
    );
}
