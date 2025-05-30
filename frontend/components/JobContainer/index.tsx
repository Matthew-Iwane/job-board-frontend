'use client';

import { useState, useEffect } from 'react';
import { Job } from '@/types/Job';
import JobsList from './JobCardList';
import JobDetails from './JobCardDetails';
import Pagination from './Pagination';

import styles from './JobContainer.module.scss';

import { fetchJobs } from '@/lib/fetchJobs';
import { getPaginationRange } from '@/lib/getPaginationRange';


interface Props {
  jobs: Job[];
  totalJobs: number;
  totalPages: number;
  currPage: number;
}



export default function JobsContainer({ jobs, totalJobs, totalPages, currPage }: Props) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(jobs[0] || null);
  const [currentPage, setCurrentPage] = useState(currPage || 1);
  const [fetchedJobs, setFetchedJobs] = useState<Job[]>(jobs);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchJobs(currentPage, 10);

        setFetchedJobs(data.jobs);
        setSelectedJob(data.jobs[0] || null);
      } catch (err) {
        console.error('Failed to fetch jobs:', err);
      }
    };

    loadJobs();
  }, [currentPage]);


  return (
    <div className={styles.container}>
      <div className="joblist-container">
        <JobsList
          jobs={fetchedJobs}
          totalJobs={totalJobs}
          totalPages={totalPages}
          currentPage={currentPage}
          onSelectJob={setSelectedJob}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

      </div>


      <JobDetails job={selectedJob} />

    </div>
  );
}
