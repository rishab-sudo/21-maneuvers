import { useState } from "react";

export default function useAIResponse() {
  const [loading, setLoading] = useState(false);

  // Topics allowed
  const allowedKeywords = [
    "digital",
    "digital marketing",
    "marketing",
    "seo",
    "search engine",
    "google ads",
    "facebook ads",
    "meta ads",
    "web",
    "website",
    "web development",
    "development",
    "performance",
    "performance marketing",
    "branding",
    "brand",
    "brand strategy",
    "strategy",
    "marketing strategy",
    "plan",
    "campaign",
  ];

  // Validate questions
  function isAllowed(question) {
    const q = question.toLowerCase();
    return allowedKeywords.some((keyword) => q.includes(keyword));
  }

  const askAI = async (question) => {
    // If question NOT allowed
    if (!isAllowed(question)) {
      return "❌ I can only answer questions related to Digital Marketing, SEO, Web Development, Performance Marketing & Brand Strategy.";
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [
              {
                role: "system",
                content:
                  "You are an expert assistant that answers ONLY questions related to: digital marketing, SEO, web development, performance marketing, brand strategy. Decline everything else.",
              },
              {
                role: "user",
                content: question,
              },
            ],
          }),
        }
      );

      if (!res.ok) {
        return "❌ API Error — Check your API key in .env";
      }

      const data = await res.json();
      return data.choices?.[0]?.message?.content || "⚠ No response from AI";
    } catch (error) {
      return "❌ Something went wrong! Check your internet or API key.";
    } finally {
      setLoading(false);
    }
  };

  return { askAI, loading };
}
