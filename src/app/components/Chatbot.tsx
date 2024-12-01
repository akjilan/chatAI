"use client";

import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "How can I assist you, sir?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: any) => {
    e.preventDefault();
    if (input.trim() === "") return;

    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600"
        >
          Chat
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-lg">Support Chat</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-red-500 font-bold"
            >
              X
            </button>
          </div>

          <div className="h-64 overflow-y-auto border-t border-b mb-4 p-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.role === "user" ? "text-right" : "text-left"
                } mb-2`}
              >
                <span
                  className={`inline-block px-3 dark:text-gray-800 py-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 border dark:text-gray-950 rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
