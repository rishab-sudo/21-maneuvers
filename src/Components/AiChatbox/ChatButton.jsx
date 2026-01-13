// src/components/ChatButton.jsx
export default function ChatButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#4A47FF",
        color: "#fff",
        padding: "14px 20px",
        borderRadius: "50px",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
      }}
    >
      Chat AI
    </button>
  );
}
