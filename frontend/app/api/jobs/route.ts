import { NextRequest, NextResponse } from 'next/server';
import { fetchJobs } from '@/lib/fetchJobs';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // console.log(searchParams.toString());

  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '10';

  try {
    const data = await fetchJobs(page, limit);  
    return NextResponse.json(data);

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
