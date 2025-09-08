import type { Message } from "../../dashboard/pages/App/chat";
import { useEffect, useRef } from "react";

interface Props {
  messages: Message[];
}

const MessageList = ({ messages }: Props) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-xs lg:max-w-md ${msg.isOwn ? "order-2" : "order-1"}`}
          >
            <div
              className={`rounded-2xl px-4 py-2 ${
                msg.isOwn
                  ? "bg-blue-600 text-white rounded-br-md"
                  : "bg-gray-200 text-gray-900 rounded-bl-md dark:bg-slate-700 dark:text-white"
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.text}</p>
            </div>
            <div
              className={`text-xs mt-1 ${
                msg.isOwn
                  ? "text-right text-gray-500 dark:text-slate-400"
                  : "text-left text-gray-500 dark:text-slate-400"
              }`}
            >
              {msg.timestamp}
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default MessageList;
