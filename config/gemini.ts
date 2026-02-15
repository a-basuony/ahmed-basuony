// gemini.ts

// Lazy loading the GoogleGenerativeAI SDK to reduce initial bundle size

export async function getGeminiResponse(prompt: string): Promise<string> {
  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API;

  if (!GOOGLE_API_KEY) {
    // 🚨 تم تحديث رسالة الخطأ لتعكس اسم المتغير الجديد
    throw new Error("Missing NEXT_PUBLIC_GEMINI_API environment variable");
  }

  // Dynamic import of the SDK
  const { GoogleGenerativeAI } = await import("@google/generative-ai");

  // تهيئة GoogleGenerativeAI باستخدام مفتاح الـ API
  const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

  // 🚨 التعديل هنا: استخدام gemini-pro بدلاً من gemini-1.5-flash لحل مشكلة 404 -> (Updated to 2.5-flash based on previous context)
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
