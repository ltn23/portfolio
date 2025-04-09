// src/components/FloatingChatbot.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input, Button, Spin } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import { generateText } from '../services/geminiService';

const FloatingChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const initialMessage = {
        text: `
Greetings, Commander Le Tai Nhan! I’m **AstroNhan**, your cosmic AI assistant. Ready to assist you with:

- *Coding tips* (React, TailwindCSS, you name it!)
- *Space trivia* (because who doesn’t love the cosmos?)
- *Daily tasks* (I’m your orbital organizer!)

How can I help you today?
    `,
        sender: 'bot',
    };
    const [messages, setMessages] = useState([initialMessage]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        // Kiểm tra nếu người dùng gõ "clean"
        if (input.trim().toLowerCase() === 'clean') {
            setMessages([initialMessage]);
            setInput('');
            return;
        }

        const userMessage = { text: input, sender: 'user' };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            // Thêm hướng dẫn ngôn ngữ vào prompt
            const languageInstruction = `Please respond in the same language as my input: "${input}"`;
            const conversation = messages
                .map((msg) => `${msg.sender === 'user' ? 'User' : 'AstroNhan'}: ${msg.text}`)
                .join('\n') + `\nUser: ${input}\n${languageInstruction}`;
            const botResponse = await generateText(conversation);
            const botMessage = { text: botResponse, sender: 'bot' };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            const errorMessage = {
                text: 'Houston, we have a problem! *Something went wrong.* Want to try again, boss?',
                sender: 'bot',
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Nút tròn nổi */}
            <motion.div
                className="fixed bottom-6 right-6 z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Button
                    type="primary"
                    shape="circle"
                    icon={<MessageOutlined />}
                    size="large"
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-gradient-to-r from-cosmic-purple to-stellar-blue border-0 shadow-lg"
                    style={{ width: '60px', height: '60px' }}
                />
            </motion.div>

            {/* Cửa sổ chat */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-20 right-6 w-96 bg-space-black/95 p-6 rounded-xl border-2 border-cosmic-purple/20 shadow-lg flex flex-col z-50"
                    style={{ height: '500px' }}
                >
                    <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-cosmic-purple to-stellar-blue text-transparent bg-clip-text mb-4">
                        AstroNhan
                    </h2>
                    <div className="flex-1 overflow-y-auto mb-4">
                        {messages.map((msg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
                            >
                                <div
                                    className={`max-w-xs p-3 rounded-lg ${msg.sender === 'user' ? 'bg-cosmic-purple text-star-white' : 'bg-stellar-blue/50 text-star-white'
                                        }`}
                                >
                                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                                </div>
                            </motion.div>
                        ))}
                        {loading && (
                            <div className="flex justify-start mb-2">
                                <Spin tip="AstroNhan is processing..." />
                            </div>
                        )}
                    </div>
                    <div className="flex space-x-2">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onPressEnter={handleSend}
                            placeholder="Ask AstroNhan anything..."
                            className="bg-space-black border-cosmic-purple/50 text-black" // Đã sửa lại thành text-star-white
                        />
                        <Button
                            type="primary"
                            onClick={handleSend}
                            disabled={loading || !input.trim()}
                            className="bg-gradient-to-r from-cosmic-purple to-stellar-blue border-0 hover:scale-105 transition-transform"
                        >
                            Send
                        </Button>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default FloatingChatbot;