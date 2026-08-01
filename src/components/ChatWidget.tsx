"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./ChatWidget.css";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "¡Hola! Soy el asistente de Bryan. Pregúntame sobre su experiencia, stack o proyectos.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Baja el scroll automáticamente cuando llega un mensaje nuevo
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error desconocido");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Tuve un problema para responder. Intenta de nuevo en un momento.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      sendMessage();
    }
  }

  return (
    <div className="chat-widget">
      {isOpen && (
        <div
          className="chat-panel"
          role="dialog"
          aria-label="Chat con el asistente"
        >
          {/* Header */}
          <div className="chat-header">
            <span className="chat-title">
              <span className="chat-status-dot" aria-hidden="true" />
              Pregúntale a mi asistente
            </span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar chat"
              className="chat-close"
            >
              ✕
            </button>
          </div>

          {/* Mensajes */}
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-message ${
                  msg.role === "user"
                    ? "chat-message--user"
                    : "chat-message--assistant"
                }`}
              >
                {msg.role === "assistant" ? (
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                ) : (
                  msg.text
                )}
              </div>
            ))}
            {isLoading && (
              <div className="chat-typing" aria-label="El asistente está escribiendo">
                <span className="chat-typing-dot" />
                <span className="chat-typing-dot" />
                <span className="chat-typing-dot" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chat-input-row">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu pregunta..."
              disabled={isLoading}
              aria-label="Mensaje"
              className="chat-input"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="chat-send"
            >
              Enviar
            </button>
          </div>
        </div>
      )}

      {/* Botón flotante + píldora de invitación */}
      <div className="chat-toggle-row">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Cerrar chat" : "Abrir chat: pregúntale a la IA sobre Bryan"}
          aria-expanded={isOpen}
          className={`chat-toggle ${!isOpen ? "is-closed" : ""}`}
        >
          {isOpen ? "✕" : "💬"}
        </button>
        {!isOpen && (
          <span className="chat-hint" aria-hidden="true">
            <span className="chat-hint-text">Pregúntame sobre Bryan</span>
            <span className="chat-hint-tag">Chatbot IA</span>
          </span>
        )}
      </div>
    </div>
  );
}