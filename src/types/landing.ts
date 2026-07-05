export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  category: 'core' | 'ai' | 'cloud' | 'modernization';
  deliverables: string[];
  techStack: string[];
  impactMetric: string;
  popular?: boolean;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  subtitle: string;
  clientIndustry: string;
  category: string;
  description: string;
  metrics: { label: string; value: string; change: string }[];
  architecture: string[];
  features: string[];
  codeSnippet: string;
  demoType: 'saas' | 'ai' | 'mobile' | 'cloud';
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  clientLogo: string;
  industry: string;
  headlineMetric: string;
  challenge: string;
  solution: string;
  results: string[];
  duration: string;
  teamSize: string;
  techStack: string[];
  testimonialQuote: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  companyLogo: string;
  avatar: string;
  rating: number;
  industry: string;
  metrics: string;
  linkedInUrl?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  idealFor: string;
  deliveryTime: string;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Process' | 'Pricing' | 'Security & IP' | 'Engineering' | 'Team';
}

export interface EstimatorOptions {
  projectType: string;
  features: string[];
  teamSize: string;
  timeline: string;
  compliance: string[];
  cloudProvider: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  timezone: string;
  address: string;
  flag: string;
}
