// import { Job } from '@/types/Job';

// export async function fetchJobs(): Promise<Job[]> {
//   const res = await fetch(`http://localhost:3001/jobs`, {
//     headers: {
//       'x-api-key': process.env.JOBS_API_KEY as string,
//     },
//     next: { revalidate: 60 } // ISR: Cache for 60 seconds
//   });

//   if (!res.ok) throw new Error('Failed to fetch jobs');

//   return res.json();
// }

import { Job } from '@/types/Job';

export interface PaginatedJobs {
  jobs: Job[]; 
  totalJobs: number;
  totalPages: number;
  currentPage: number;
}

export async function fetchJobs(page = 1, limit = 10): Promise<PaginatedJobs> {
  const url = new URL('http://localhost:3001/jobs');
  url.searchParams.append('page', page.toString());
  url.searchParams.append('limit', limit.toString());

  const res = await fetch(url.toString(), {
    headers: {
      'x-api-key': process.env.JOBS_API_KEY as string,
    },
    next: { revalidate: 60 } // ISR: Cache for 60 seconds
  });

  if (!res.ok) throw new Error('Failed to fetch jobs');

  // Backend should return { jobs: Job[], totalPages: number }
  return res.json();
}


/**
 * http://localhost:3001/jobs  --> make sure to hide this
 */