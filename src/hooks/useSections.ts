import { useCallback, useEffect, useState } from "react";
import { getSectionsByCourseId } from "@/services/sectionService";
import type { Section } from "@/types/section";

export function useSections(courseId: string) {
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);

  const loadSections = useCallback(async () => {
    if (!courseId) return;

    try {
      setLoading(true);
      const data = await getSectionsByCourseId(courseId);
      setSections(data);
    } catch (error) {
      console.error("Error loading sections:", error);
    } finally {
      setLoading(false);
    }
  }, [courseId]);

  useEffect(() => {
    loadSections();
  }, [loadSections]);

  return {
    sections,
    loading,
    refreshSections: loadSections,
  };
}