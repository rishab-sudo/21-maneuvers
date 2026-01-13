// src/components/ChatWindow.jsx
import { useState } from "react";

export default function ChatWindow({ visible, onClose, askAI, loading }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  if (!visible) return null;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const reply = await askAI(input);

    const botMsg = { sender: "bot", text: reply };
    setMessages((prev) => [...prev, botMsg]);

    setInput("");
  };

  return (
<div
  style={{
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "320px",
    height: "400px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    zIndex: 99999  // 👈 this is required
  }}
>

      {/* Header */}
      <div
        style={{
          background: "#4A47FF",
          padding: "10px",
          color: "white",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        AI Support
        <span style={{ cursor: "pointer" }} onClick={onClose}>
          X
        </span>
      </div>

      {/* Messages */}
      <div
        style={{
          flexGrow: 1,
          padding: "10px",
          overflowY: "auto",
          fontSize: "14px"
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: "12px",
              textAlign: msg.sender === "user" ? "right" : "left"
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px 12px",
                background: msg.sender === "user" ? "#4A47FF" : "#f1f1f1",
                color: msg.sender === "user" ? "#fff" : "#333",
                borderRadius: "15px"
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div style={{ padding: "10px", display: "flex", gap: "8px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          style={{
            flexGrow: 1,
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          style={{
            background: "#4A47FF",
            border: "none",
            color: "white",
            padding: "8px 12px",
            borderRadius: "8px"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
