export type Page = 'home' | 'about' | 'what-we-do' | 'contact';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  experience: string;
  bio: string;
  specialty: string;
  imageLabel: string;
  imageUrl: string;
  imageAlt: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
  category: string;
  yearJoined: string;
}

export interface ProcessingStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  qualityControl: string;
  duration: string;
  keyAspect: string;
  iconName: string;
  imageUrl: string;
  imageAlt: string;
}

export interface BrandPartner {
  name: string;
  tagline: string;
  region: string;
  founded: string;
}
