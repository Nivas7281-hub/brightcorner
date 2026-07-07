export interface Section {
  id?: string;
  courseId: string;
  title: string;
  description: string;
  order: number;
  createdAt: Date;
}