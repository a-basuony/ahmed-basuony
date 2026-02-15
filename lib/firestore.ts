import {
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { getDb } from "../config/firebase";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  tech: string[];
  demo: string;
  code: string;
  image?: string;
}

export const getProjects = async (): Promise<ProjectData[]> => {
  try {
    const db = await getDb();
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
      collection(db, "projects"),
    );
    const projects: ProjectData[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title || "",
        description: data.desc || data.description || "",
        tech: Array.isArray(data.technologies)
          ? data.technologies
          : data.technologies?.split(",") || [],
        demo: data.demo || data.demoLink || "",
        code: data.code || data.codeLink || "",
        image: data.image || "/images/placeholder.png",
      };
    });
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
