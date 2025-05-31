export interface Job {
  _id?: string, // Optional for MongoDB documents
  jobid: string,
  title: string,
  company: string,
  city: string,
  state: string,
  country: string,
  description: string,
  date: string,
  currency: string,
  cpc: string,
  url: string,
  logo: string
  }
  