import { Send, Paperclip, Video } from "lucide-react";

interface Props {
  message: string;
  setMessage: (val: string) => void;
  handleSendMessage: () => void;
}

const MessageInput = ({ message, setMessage, handleSendMessage }: Props) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="p-4 border-t border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-end space-x-3">
        <button
          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors
                     dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-700"
          aria-label="Emoji"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Textarea */}
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Enter your message"
            aria-label="Message input"
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 pr-20 text-gray-800 
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                       resize-none min-h-[48px] max-h-32
                       dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:placeholder-slate-400"
            rows={1}
          />
          <div className="absolute right-2 bottom-2 flex items-center space-x-2">
            <button
              className="p-1 text-gray-500 hover:text-gray-700 transition-colors
                         dark:text-slate-400 dark:hover:text-white"
              aria-label="Attach file"
            >
              <Paperclip className="w-4 h-4" />
            </button>
            <button
              className="p-1 text-gray-500 hover:text-gray-700 transition-colors
                         dark:text-slate-400 dark:hover:text-white"
              aria-label="Start video call"
            >
              <Video className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Send Button */}
        <button
          onClick={handleSendMessage}
          className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
