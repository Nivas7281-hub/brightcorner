import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Section } from "@/types/section";

export async function createSection(section: Omit<Section, "id">) {
  const sectionsRef = collection(db, "courseSections");
  const docRef = await addDoc(sectionsRef, section);
  return docRef.id;
}

export async function getSectionsByCourseId(
  courseId: string
): Promise<Section[]> {
  const sectionsRef = collection(db, "courseSections");

  const q = query(
    sectionsRef,
    where("courseId", "==", courseId),
    orderBy("order", "asc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Section[];
}