export interface Social {
  linkedin?: string;
  twitter?: string;
  github?: string;
  instagram?: string;
  [key: string]: string | undefined;
}

export interface CompanyInfo {
  name: string;
  logo: string;
  founded: string;
  employees: string;
  services: string[];
}

export interface User {
  id: number;
  name: string;
  slug: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  profileImage: string;
  coverImage: string;
  social: Social;
  bio: string;
  highlights: string[];
  companyInfo: CompanyInfo;
  personalQuote: string;
  expertise: string[];
}