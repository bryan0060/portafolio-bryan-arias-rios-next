import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

const knowledgeBase = fs.readFileSync(
  path.join(process.cwd(), 'src/data/knowledge-base.md'),
  'utf-8'
);

const behaviorInstructions = process.env.BOT_BEHAVIOR_INSTRUCTIONS || '';

const SYSTEM_PROMPT = `Eres el asistente virtual del portafolio de Bryan Arias Rios. Tu trabajo es responder preguntas sobre su perfil profesional usando la siguiente información. Responde en texto plano, sin usar sintaxis Markdown compleja innecesaria, de forma clara y natural.

INFORMACIÓN SOBRE BRYAN:
${knowledgeBase}

INSTRUCCIONES DE COMPORTAMIENTO:
${behaviorInstructions}`;

const GEMINI_MODEL = "gemini-3.5-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Falta el campo 'message' en la petición." },
        { status: 400 }
      );
    }

    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": process.env.GEMINI_API_KEY as string,
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SYSTEM_PROMPT }],
        },
        contents: [
          {
            role: "user",
            parts: [{ text: message }],
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorDetail = await response.text();
      console.error("Error de la API de Gemini:", errorDetail);
      return NextResponse.json(
        { error: "Error al llamar a la API de Gemini." },
        { status: 500 }
      );
    }

    const data = await response.json();
    // Gemini devuelve el texto en una estructura distinta a Claude:
    // candidates[0].content.parts[0].text
    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ?? "No hubo respuesta.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error en /api/chat:", error);
    return NextResponse.json(
      { error: "Ocurrió un error inesperado." },
      { status: 500 }
    );
  }
}