import { Job } from '@/types/Job';
import JobCard from './JobCard';
import styles from './JobContainer.module.scss';

interface Props {
  jobs: Job[];
  totalJobs: number;
  totalPages: number;
  currentPage: number;
  onSelectJob: (job: Job) => void;
}

export default function JobCardList({ jobs, totalJobs, totalPages, currentPage, onSelectJob }: Props) {
  // console.log("Total Jobs:", totalJobs);
  // console.log("Total Pages:", totalPages);
  // console.log("Current Page:", currentPage);


  return (
    <ul className={styles.jobList}>
      
      {jobs.map((job) => (
        <li key={job.jobid} onClick={() => onSelectJob(job)}>
          <JobCard job={job} />
        </li>
      ))}
    </ul>
  );
}
