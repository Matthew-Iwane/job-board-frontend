import { Job } from '@/types/Job';

export async function fetchJobs(): Promise<Job[]> {
  const res = await fetch(`http://localhost:3001/jobs`, {
    headers: {
      'x-api-key': process.env.JOBS_API_KEY as string,
    },
    next: { revalidate: 60 } // ISR: Cache for 60 seconds
  });

  if (!res.ok) throw new Error('Failed to fetch jobs');

  return res.json();
}

/**
 * http://localhost:3001/jobs  --> make sure to hide this
 */