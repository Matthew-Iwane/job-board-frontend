import React from "react";
import styles from "@/app/page.module.scss";
import { Job } from "@/types/Job";
// import DOMPurify from 'dompurify';

interface JobCardProps {
    job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    // const cleanHTML = DOMPurify.sanitize(job.description);

    return (
        <li className={styles.jobCard} key={job.jobid}>
            <a href={job.url} target="_blank" rel="noopener noreferrer">
                <h2>{job.company}</h2>
            </a>
            
            <div
                className="job-description"
                dangerouslySetInnerHTML={{ __html: job.description }}
            />
      </li>
    )
}

export default JobCard;