import { Video } from "lucide-react";
import { FcBusinesswoman } from "react-icons/fc";

const ChatHeader = () => {
  return (
    <div
      className="
        flex items-center justify-between p-4 
        border-b bg-gray-100 border-gray-300 
        dark:bg-slate-800 dark:border-slate-700
        
      "
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-slate-600 overflow-hidden">
          <FcBusinesswoman className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Victoria P. Miller
          </h3>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-green-600 dark:text-green-400">
              online
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button
          className="p-2 rounded-lg transition-colors 
                     hover:bg-gray-200 dark:hover:bg-slate-700"
        >
          <Video className="w-5 h-5 text-gray-500 dark:text-slate-400" />
        </button>
        <button
          className="p-2 rounded-lg transition-colors 
                     hover:bg-gray-200 dark:hover:bg-slate-700"
        >
          <svg
            className="w-5 h-5 text-gray-500 dark:text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </button>
        <button
          className="p-2 rounded-lg transition-colors 
                     hover:bg-gray-200 dark:hover:bg-slate-700"
        >
          <svg
            className="w-5 h-5 text-gray-500 dark:text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
