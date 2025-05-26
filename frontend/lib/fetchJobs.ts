import { Job } from '@/types/Job';

export async function fetchJobs(): Promise<Job[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`, {
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_JOBS_API_KEY as string,
    },
    next: { revalidate: 60 } // ISR: Cache for 60 seconds
  });

  if (!res.ok) throw new Error('Failed to fetch jobs');
  return res.json();
}