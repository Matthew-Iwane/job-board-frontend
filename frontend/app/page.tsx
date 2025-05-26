// app/page.tsx
import React from 'react';
import { fetchJobs } from '@/lib/fetchJobs';
import styles from './page.module.scss';
import JobCard from "@/components/JobCard";

export default async function HomePage() {
  const jobs = await fetchJobs();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Job Listings</h1>
      <ul className={styles.jobList}>
        {jobs.map((job) => (
          <JobCard 
            key={job.jobid} 
            job={job} 
          />
        ))}
      </ul>
    </main>
  );
}