import React from "react";
import styles from './JobContainer.module.scss';
import { Job } from "@/types/Job";
// import DOMPurify from 'dompurify';

interface JobCardProps {
    job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    // const cleanHTML = DOMPurify.sanitize(job.description);

    return (
        <div className={styles.jobCard} key={job.jobid}>
            <h1>{job.company}</h1>
        </div>
    )
}

export default JobCard;