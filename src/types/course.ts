export interface Course {
  id?: string;
  title: string;
  description: string;
  category: string;
  level: string;
  price: number;
  status: "draft" | "published";
  createdAt: Date;
}