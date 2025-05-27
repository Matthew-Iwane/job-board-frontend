import { Job } from '@/types/Job';
import styles from './JobContainer.module.scss';

interface Props {
    job: Job | null;
}

export default function JobDetails({ job }: Props) {
    if (!job) {
        return (
            <div className={styles.jobDetails}>
                <h1>Click any job to view more details</h1>
            </div>
        )
    }

    return (
        <div className={styles.jobDetails}>
            <a className={styles.url} href={job.url} target="_blank" rel="noopener noreferrer">Apply Now </a>
            <p><strong>Company:</strong> {job.company}</p>
            <div dangerouslySetInnerHTML={{ __html: job.description }} />
            <a className={styles.url} href={job.url} target="_blank" rel="noopener noreferrer">Apply Now </a>
        </div>
    );
}
