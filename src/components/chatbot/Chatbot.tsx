'use client'
import React, { useState } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: 'Hello! How can I assist you today?', sender: 'bot' },
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, { text: inputValue, sender: 'user' }]);
            setInputValue('');

            // Simulate bot response
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: 'Thank you for your message! Our team will get back to you soon.', sender: 'bot' },
                ]);
            }, 1000);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-center">
            {!isOpen && (
                <div 
                    className='w-32 md:w-40 h-16 md:h-20 bg-white rounded-2xl m-2 flex justify-center items-center cursor-pointer shadow-md'
                    onClick={() => setIsOpen(true)}
                >
                    <span className="text-xs md:text-sm animate-pulse">Need help? Chat with us!</span>
                </div>
            )}
            {isOpen ? (
                <div className="w-full md:w-80 h-screen md:h-96 bg-white rounded-lg shadow-lg flex flex-col fixed bottom-0 right-0 md:bottom-4 md:right-4 z-50">
                    <div className="flex justify-between items-center p-4 border-b border-gray-400">
                        <h2 className="text-lg font-bold">Ziada Chatbot</h2>
                        <button onClick={() => setIsOpen(false)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex mb-2 ${
                                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                                }`}
                            >
                                <span
                                    className={`p-2 rounded-lg ${
                                        message.sender === 'user'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 text-gray-800'
                                    }`}
                                >
                                    {message.text}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="flex p-4 border-t border-gray-400 flex-col md:flex-row gap-1">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="flex-1 p-2 border border-gray-400 rounded-lg mb-2 md:mb-0"
                            placeholder="Type a message..."
                        />
                        <button
                            onClick={handleSendMessage}
                            className="p-2 bg-blue-500 text-white rounded-lg w-full md:w-auto"
                        >
                            Send
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-500 text-white p-2 md:p-4 rounded-full shadow-lg"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default Chatbot;