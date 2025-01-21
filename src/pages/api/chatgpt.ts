import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Ensure you have this in your .env.local
});
const openai = new OpenAIApi(configuration);

type Data = {
  reply: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | { error: string }>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'No prompt provided' });
  }

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo', // or another model of your choice
      messages: [{ role: 'user', content: prompt }],
    });

    const reply = response.data.choices[0]?.message?.content.trim();
    res.status(200).json({ reply: reply || 'Sorry, I could not generate a response.' });
  } catch (error: any) {
    console.error('Error communicating with OpenAI:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
} 