// Lazy-initialized Firebase — SDK loads on first use, not at page load
import type { Firestore } from "firebase/firestore";

let dbInstance: Firestore | null = null;

export async function getDb(): Promise<Firestore> {
  if (dbInstance) return dbInstance;

  const { initializeApp } = await import("firebase/app");
  const { getFirestore } = await import("firebase/firestore");

  const firebaseConfig = {
    apiKey: "AIzaSyD3fempHbWWycug5FSP3dBnpNdpZFV53i8",
    authDomain: "portfolio-projects-4d586.firebaseapp.com",
    projectId: "portfolio-projects-4d586",
    storageBucket: "portfolio-projects-4d586.firebasestorage.app",
    messagingSenderId: "907853502682",
    appId: "1:907853502682:web:512da8868d943c0ae72de3",
    measurementId: "G-TRHHMMT7EZ",
  };

  const app = initializeApp(firebaseConfig);
  dbInstance = getFirestore(app);

  // Load analytics lazily only on the client
  if (typeof window !== "undefined") {
    import("firebase/analytics").then(({ getAnalytics }) => getAnalytics(app));
  }

  return dbInstance;
}
