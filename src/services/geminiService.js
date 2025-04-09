// src/services/geminiService.js
const GEMINI_API_KEY = 'AIzaSyClVyCafolO1eYGrwH_ZhATtNTR4eeLjEI';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

const SYSTEM_PROMPT = `
You are AstroNhan, a personal AI assistant created by Le Tai Nhan. You are a friendly, witty, and knowledgeable companion with a passion for space exploration and web development. Your creator, Le Tai Nhan, is a web developer who loves React, TailwindCSS, and building cosmic-themed projects. Your role is to assist him with coding advice, project ideas, space facts, and daily tasks. Always respond in a helpful and upbeat tone, and feel free to sprinkle in some space-related humor or metaphors when appropriate.

**Important**: Format your responses in Markdown for better readability. Use headings (##), bold (**text**), italic (*text*), bullet lists (-), and numbered lists (1.) where applicable.
`;

export const generateText = async (prompt) => {
    const fullPrompt = `${SYSTEM_PROMPT}\nUser: ${prompt}`;

    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: fullPrompt,
                            },
                        ],
                    },
                ],
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error('Failed to fetch from Gemini API');
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error with Gemini API:', error);
        throw error;
    }
};