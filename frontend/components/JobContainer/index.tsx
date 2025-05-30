'use client';

import { useState, useEffect } from 'react';
import { Job } from '@/types/Job';
import JobsList from './JobCardList';
import JobDetails from './JobCardDetails';

import styles from './JobContainer.module.scss';

import {fetchJobs} from '@/lib/fetchJobs';

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

  const limit = 10

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

        <div className={styles.pagination}>
          <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
            Previous
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              style={{ fontWeight: currentPage === i + 1 ? 'bold' : 'normal' }}
            >
              {i + 1}
            </button>
          ))}

          <button 
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} 
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>


      <JobDetails job={selectedJob} />

    </div>
  );
}
