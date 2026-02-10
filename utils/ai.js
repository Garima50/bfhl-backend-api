const axios = require("axios");

async function askAI(question) {
  if (typeof question !== "string") {
    throw new Error("Invalid AI input");
  }

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      contents: [{ parts: [{ text: question }] }]
    }
  );

  const text =
  response.data.candidates?.[0]?.content?.parts?.[0]?.text || "";
if (!text) {
  throw new Error("Empty AI response");
}
  return text.trim().split(/\s+/)[0]; // SINGLE WORD ONLY
}

module.exports = { askAI };
