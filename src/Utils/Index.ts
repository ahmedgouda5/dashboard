import type { JSX } from 'react/jsx-runtime';
export const Sidebar = [
  {
    title: "Analytics",
    href: "/analytics",
  },
  {
    title: "Sales",
    href: "/sales",
  },
  {
    title: "Finance",
    href: "/finance",
  },
];




interface AnalyticsData {
  icon: string;
  title: string;
  many: number;
}

export const AnalyticsData: AnalyticsData[] = [
  {
    icon: "<IoMdEye />",
    title: "page view",
    many: 1000,
  },
  {
    icon: "<TbHandClick />",
    title: "clicks",
    many: 13000,
  },
  {
    icon: "<MdShowChart />",
    title: "conversion",
    many: 14000,
  },
  {
    icon: "<FaCircleUser />",
    title: "New Users",
    many: 9.5,
  },
];



// navbar


export interface FinanceCard {
  price: number;
  title: string;
  icon: JSX.Element;
  percentage: number;
}




// email


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

export const Email: EmailItem[] = [
  {
    id: "1",
    sender: "Dallas C. Payne",
    subject:
      "Lucas Kriebel (@Daniel J. Olsen) has sent you a direct message on Twitter!",
    preview: "Invalid Date",
    date: "Invalid Date",
    isStarred: false,
    isRead: false,
    hasAttachments: false,
  },
  {
    id: "2",
    sender: "Florence A. Lopez",
    subject: "Images",
    preview: "",
    date: "2/21/2001",
    isStarred: true,
    isRead: true,
    hasAttachments: true,
    attachments: [
      { name: "Img_201.jpg", type: "image" },
      { name: "Img_202.jpg", type: "image" },
      { name: "Img_203.jpg", type: "image" },
    ],
  },
  {
    id: "3",
    sender: "Gail A. Nix",
    subject: "Train/Bus",
    preview:
      "Yes ok, great! I'm not stuck in Stockholm anymore, we're making pr...",
    date: "2/19/2001",
    isStarred: false,
    isRead: true,
    hasAttachments: false,
  },
  {
    id: "5",
    sender: "Victoria P. Miller",
    subject: "(No Subject)",
    preview: "",
    date: "2/28/2001",
    isStarred: true,
    isRead: true,
    hasAttachments: true,
    attachments: [
      { name: "Dashboard.pdf", type: "pdf" },
      { name: "pages-data.pdf", type: "pdf" },
    ],
  },
  {
    id: "6",
    sender: "Dallas C. Payne",
    subject: "(No Subject)",
    preview: "",
    date: "2/27/2001",
    isStarred: false,
    isRead: false,
    hasAttachments: true,
    attachments: [
      { name: "doc1.doc", type: "doc" },
      { name: "doc2.doc", type: "doc" },
      { name: "doc3.doc", type: "doc" },
    ],
  },
  {
    id: "7",
    sender: "Lynne J. Petty",
    subject: "This Week's Top Stories",
    preview: "Our top pick for you on Medium this week The Man...",
    date: "3/01/2001",
    isStarred: false,
    isRead: true,
    hasAttachments: false,
  },
  {
    id: "8",
    sender: "Kevin J. Morris",
    subject: "Meeting Reminder",
    preview: "Don’t forget our meeting scheduled for tomorrow at 3 PM.",
    date: "3/02/2001",
    isStarred: true,
    isRead: false,
    hasAttachments: false,
  },
  {
    id: "9",
    sender: "Alice P. Johnson",
    subject: "Invoice Attached",
    preview: "Please find attached the invoice for last month’s services.",
    date: "3/03/2001",
    isStarred: false,
    isRead: false,
    hasAttachments: true,
    attachments: [{ name: "Invoice-February.pdf", type: "pdf" }],
  },
  {
    id: "10",
    sender: "Support Team",
    subject: "Password Reset",
    preview: "Click the link below to reset your password.",
    date: "3/04/2001",
    isStarred: false,
    isRead: true,
    hasAttachments: false,
  },
];
