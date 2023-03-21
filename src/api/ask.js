import { Configuration, OpenAIApi } from "openai";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/ask", async (req, res) => {
  const prompt = req.body.subject;
  const openai = new OpenAIApi(configuration);
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `I want you to generate a comprehensive and well-structured lesson plan for ${prompt}. Please include clear learning objectives, relevant examples, detailed explanations, and a variety of activities and assessments to ensure effective learning. Format the lesson plan using Markdown.`,
        },
        { role: "user", content: prompt },
      ],
    });
    const completion = response.data.choices[0].message;
    return res.status(200).json({
      success: true,
      message: completion,
    });
  } catch (error) {
    console.log(error.message);
  }
});

export default app;
