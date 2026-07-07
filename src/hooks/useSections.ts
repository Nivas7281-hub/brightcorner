import { useEffect, useState } from "react";
import { getSectionsByCourseId } from "@/services/sectionService";
import type { Section } from "@/types/section";

export function useSections(courseId: string) {
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSections() {
      try {
        const data: Section[] = await getSectionsByCourseId(courseId);
        setSections(data);
      } catch (error) {
        console.error("Error loading sections:", error);
      } finally {
        setLoading(false);
      }
    }

    if (courseId) {
      loadSections();
    }
  }, [courseId]);

  return {
    sections,
    loading,
  };
}