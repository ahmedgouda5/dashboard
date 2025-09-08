import React, { useState } from "react";
import {
  FiStar,
  FiArchive,
  FiTrash2,
  FiFileText,
  FiImage,
} from "react-icons/fi";

import { Email } from "@/Utils/Index";

export interface EmailItem {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  date: string;
  isStarred: boolean;
  isRead: boolean;
  hasAttachments: boolean;
  attachments?: Array<{
    name: string;
    type: "pdf" | "doc" | "image";
  }>;
}

interface EmailTab {
  id: string;
  label: string;
  icon: React.ReactNode;
  count?: number;
}

const EmailInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("primary");
  const [selectedEmails, setSelectedEmails] = useState<Set<string>>(new Set());

  const tabs: EmailTab[] = [
    { id: "primary", label: "Primary", icon: "📧" },
    { id: "social", label: "Social", icon: "👥" },
    { id: "promotions", label: "Promotions", icon: "🏷️" },
    { id: "updates", label: "Updates", icon: "ℹ️" },
    { id: "forums", label: "Forums", icon: "💬" },
  ];

  const toggleEmailSelection = (emailId: string): void => {
    const newSelection = new Set(selectedEmails);
    if (newSelection.has(emailId)) {
      newSelection.delete(emailId);
    } else {
      newSelection.add(emailId);
    }
    setSelectedEmails(newSelection);
  };

  const toggleStar = (emailId: string, e: React.MouseEvent): void => {
    e.stopPropagation();
    console.log(`Toggle star for email ${emailId}`);
  };

  const getAttachmentIcon = (type: "pdf" | "doc" | "image"): React.ReactNode => {
    switch (type) {
      case "pdf":
        return <FiFileText className="w-3 h-3 text-red-500" />;
      case "doc":
        return <FiFileText className="w-3 h-3 text-blue-500" />;
      case "image":
        return <FiImage className="w-3 h-3 text-green-500" />;
    }
  };

  const renderAttachments = (
    attachments?: EmailItem["attachments"]
  ): React.ReactNode => {
    if (!attachments || attachments.length === 0) return null;

    return (
      <div className="flex items-center gap-1 ml-2">
        {attachments.slice(0, 3).map((attachment, index) => (
          <div
            key={index}
            className="flex items-center gap-1 px-1 py-0.5 bg-blue-100 dark:bg-blue-900 rounded text-xs"
          >
            {getAttachmentIcon(attachment.type)}
            <span className="text-blue-700 dark:text-blue-300 truncate max-w-20">
              {attachment.name}
            </span>
          </div>
        ))}
        {attachments.length > 3 && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            +{attachments.length - 3}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-slate-900">
      {/* Tabs */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-700"
                  : "border-transparent text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-700"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              {tab.count && (
                <span className="bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-200 px-2 py-0.5 rounded-full text-xs">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Email List */}
      <div className="flex-1 bg-white dark:bg-slate-900 overflow-y-auto">
        {Email.map((email) => (
          <div
            key={email.id}
            onClick={() => toggleEmailSelection(email.id)}
            className={`flex items-center px-4 py-3 border-b border-gray-100 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer transition-colors ${
              selectedEmails.has(email.id) ? "bg-blue-50 dark:bg-slate-700" : ""
            } ${!email.isRead ? "bg-blue-50 dark:bg-slate-800 font-medium" : ""}`}
          >
            {/* Checkbox */}
            <div className="flex items-center mr-3">
              <input
                type="checkbox"
                checked={selectedEmails.has(email.id)}
                onChange={() => toggleEmailSelection(email.id)}
                className="w-4 h-4 text-blue-600 border-gray-300 dark:border-slate-600 rounded focus:ring-blue-500"
              />
            </div>

            {/* Star */}
            <button
              onClick={(e) => toggleStar(email.id, e)}
              className="mr-3 p-1 hover:bg-gray-200 dark:hover:bg-slate-600 rounded transition-colors"
            >
              <FiStar
                className={`w-4 h-4 ${
                  email.isStarred
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-400 dark:text-gray-500"
                }`}
              />
            </button>

            {/* Email Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-sm truncate ${
                        !email.isRead
                          ? "font-semibold text-gray-900 dark:text-white"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {email.sender}
                    </span>
                    <span
                      className={`text-sm truncate ${
                        !email.isRead
                          ? "font-medium text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {email.subject || "(No Subject)"}
                    </span>
                    {email.preview && (
                      <>
                        <span className="text-gray-400 dark:text-gray-500">
                          —
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 truncate">
                          {email.preview}
                        </span>
                      </>
                    )}
                  </div>
                  {renderAttachments(email.attachments)}
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {email.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 ml-3">
              <button className="p-1 hover:bg-gray-200 dark:hover:bg-slate-600 rounded">
                <FiArchive className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </button>
              <button className="p-1 hover:bg-gray-200 dark:hover:bg-slate-600 rounded">
                <FiTrash2 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailInterface;
