import styles from '../styles/Home.module.css';
import SetupSteps from '../src/components/SetupSteps';

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <SetupSteps />
            </main>
        </div>
    );
}
