import { fetchJobs } from '@/lib/fetchJobs';
import JobsContainer from "@/components/JobContainer";
import { Job } from '@/types/Job';

interface Props {
  jobs: Job[];
  totalJobs: number;
  currPage: number;
  totalPages: number;
}

export default async function HomePage() {
  const { jobs, totalJobs, totalPages, currPage } = await fetchJobs();
  // console.log('Fetched jobs:', jobs);
  // console.log('Total jobs:', totalJobs);
  // console.log('Current page:', currPage);
  // console.log('Total pages:', totalPages);
  return (
    
    <JobsContainer
      jobs={jobs}
      totalJobs={totalJobs}
      currPage={currPage}
      totalPages={totalPages}
    />
  );
}

/*
 * First fetching the jobs data from the API endpoint I made using the `fetchJobs` function.
 * Then passing the fetched jobs data to the `JobsContainer` component,
 * which is responsible for rendering the job listings.
 * 
 * The jobs will be displayed in a 2-column layout
 *    1. The first column will contain the job title and company name of all the jobs.
 *    2. The second column will appear w/ onClick() which will display the job details.
 */