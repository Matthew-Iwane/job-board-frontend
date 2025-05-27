import { Job } from '@/types/Job';
import JobCard from './JobCard';
import styles from './JobContainer.module.scss';

interface Props {
  jobs: Job[];
  onSelectJob: (job: Job) => void;
}

export default function JobCardList({ jobs, onSelectJob }: Props) {
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
