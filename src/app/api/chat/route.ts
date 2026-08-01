import { NextRequest, NextResponse } from "next/server";

// Esto es temporal: un resumen corto escrito a mano.
// Más adelante lo vamos a reemplazar por el contenido completo
// de knowledge-base.md cuando lo armemos con calma.
const SYSTEM_PROMPT = `
Eres un asistente que responde preguntas sobre Bryan Arias Ríos,
un Full Stack Developer Junior especializado en React, Next.js,
Django y Python además de que está muy interesado en el uso de la IA Engineering, sabe manejar opencode, claude
y usar APIs de diferentes proveedores de IA (como gemini en este caso). Responde solo con información real sobre Bryan.
Si te preguntan algo que no sabes sobre él, dilo honestamente
en vez de inventar datos.

Info básica de Bryan:
- Full Stack Developer Junior
- Stack principal: React, Next.js, Django, Python
- Portafolio: https://bryanarias.vercel.app/
- GitHub: https://github.com/bryan0060
- Edad: 20 años
- Ubicación: Itagui, Antioquia, Colombia
`;

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