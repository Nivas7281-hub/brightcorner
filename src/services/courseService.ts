import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Course } from "@/types/course";

export async function getCourses(): Promise<Course[]> {
  const coursesRef = collection(db, "courses");
  const snapshot = await getDocs(coursesRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Course[];
}