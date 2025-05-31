import React from "react";
import styles from './JobContainer.module.scss';
import { Job } from "@/types/Job";

interface JobCardProps {
    job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    return (
        <div className={styles.jobCard}>
            {/* <h1>{job.company}</h1> */}
            <h3>{job.title}</h3>
            {/* <p>{job.jobid}</p> */}
        </div>
    )
}

export default JobCard;