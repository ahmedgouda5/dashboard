import { useState } from "react";
import ChatHeader from "../../../components/AppComp/ChatHeader";
import MessageList from "../../../components/AppComp/MessageList";
import MessageInput from "../../../components/AppComp/MessageInput";

export interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
  isOwn: boolean;
}

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey 😊",
      sender: "Victoria P. Miller",
      timestamp: "1 hour ago",
      isOwn: false,
    },
    {
      id: 2,
      text: "Hi Gaston, thanks for joining the meeting. Let's dive into our quarterly performance review.",
      sender: "Victoria P. Miller",
      timestamp: "1 hour ago",
      isOwn: false,
    },
    {
      id: 3,
      text: "Hi Gilbert, thanks for having me. I'm ready to discuss how things have been going.",
      sender: "You",
      timestamp: "1 hour ago",
      isOwn: true,
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        sender: "You",
        timestamp: "now",
        isOwn: true,
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <div
      className="
        flex flex-col h-screen max-w-4xl mx-auto
        bg-gray-100 text-gray-900
        dark:bg-slate-900 dark:text-white
        border border-gray-300 dark:border-slate-700
      "
    >
      <ChatHeader />
      <MessageList messages={messages} />
      <MessageInput
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default Chat;
