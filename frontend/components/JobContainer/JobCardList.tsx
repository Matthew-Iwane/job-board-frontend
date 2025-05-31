import { Job } from '@/types/Job';
import JobCard from './JobCard';
import styles from './JobContainer.module.scss';

interface Props {
  jobs: Job[];
  onSelectJob: (job: Job) => void;
}

export default function JobCardList({ jobs, onSelectJob }: Props) {
  // console.log(jobs.forEach(job => console.log('Job:', job.title, 'ID:', job.jobid)));

  return (
    <ul className={styles.jobList}>
      
      {jobs.map((job) => (
        <li key={job.jobid || job._id} onClick={() => onSelectJob(job)}>
          <JobCard job={job} />
        </li>
      ))}
    </ul>
  );
}
