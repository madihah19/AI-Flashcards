import { NextResponse } from "next/server";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const systemPrompt = "You are a flashcard generator. Given a topic, generate 10 questions and answers about that topic. Each question should be followed by its answer.";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContentStream({
      contents: [
        {
          role: "model",
          parts: [
            {
              text: systemPrompt,
            },
          ],
        },
        {
          role: "user",
          parts: [
            {
              text: `Generate 10 flashcards for the topic: ${prompt}`,
            },
          ],
        },
      ],
      generationConfig: {
        maxOutputTokens: 1500, // Adjust as needed for 10 Q&A pairs
        temperature: 0.5,
      },
    });

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of result.stream) {
          controller.enqueue(chunk.text());
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error) {
    console.error("Error fetching flashcard response:", error);
    return NextResponse.json(
      { error: "Error fetching flashcard response" },
      { status: 500 }
    );
  }
}
