import { Job } from '@/types/Job';
import styles from './JobContainer.module.scss';

import DOMPurify from 'isomorphic-dompurify';

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

    // console.log('Job Details:', job);

    const cleanHTML = DOMPurify.sanitize(job.description);

    return (
        <div className={styles.jobDetails}>
            <a className={styles.url} href={job.url} target="_blank" rel="noopener noreferrer">Apply Now</a>
            <h1>{job.company}</h1>
            {/* <h2>{job.jobid}</h2> */}
            <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
        </div>
    );
}
