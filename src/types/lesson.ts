export interface Lesson {
  id?: string;
  sectionId: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: number;
  resources: string[];
  order: number;
  createdAt: Date;
}