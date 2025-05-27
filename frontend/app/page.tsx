import { fetchJobs } from '@/lib/fetchJobs';
import JobsContainer from "@/components/JobContainer";

export default async function HomePage() {
  const fetchedJobs = await fetchJobs();
  return <JobsContainer jobs={fetchedJobs} />;
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