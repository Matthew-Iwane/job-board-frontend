'use client';

import { useState } from 'react';
import { Job } from '@/types/Job';
import JobsList from './JobCardList';
import JobDetails from './JobCardDetails';

import styles from './JobContainer.module.scss';

interface Props {
  jobs: Job[];
  totalJobs: number;
  totalPages: number;
  currentPage: number;
}

export default function JobsContainer({ jobs, totalJobs, totalPages, currentPage }: Props) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(jobs[0] || null);

  return (
    <div className={styles.container}>
      <JobsList 
        jobs={jobs} 
        totalJobs={totalJobs}
        totalPages={totalPages}
        currentPage={currentPage}
        onSelectJob={setSelectedJob} 
      />
      <JobDetails job={selectedJob} />
    </div>
  );
}
