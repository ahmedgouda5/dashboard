import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AppSidebar, Sidebar } from "@/Utils/Index";
import { Link } from "react-router";
import { CiHome } from "react-icons/ci";
import { IoBagOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdContacts, MdEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { RiTodoLine } from "react-icons/ri";

const SideBar = () => {
  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="h-full px-2 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <ul className="space-y-2">
          <li className="block p-2 ">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <span className="text-gray-400 dark:text-white font-light text-sm">
                  GENERAL
                </span>
                <AccordionTrigger className="   text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span className="flex items-center gap-2">
                    <CiHome style={{ fontSize: "1.25rem", color: "blue" }} />
                    Dashboard
                  </span>
                </AccordionTrigger>
                {Sidebar?.map((item, index) => (
                  <AccordionContent key={index}>
                    <Link
                      to={item.href}
                      className="block p-2 font-bold text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {item.title}
                    </Link>
                  </AccordionContent>
                ))}
              </AccordionItem>
              <AccordionItem value="item-2">
                <span className="text-gray-400 dark:text-white font-light text-sm">
                  App
                </span>
                <AccordionTrigger className="   text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span className="flex items-center gap-2">
                    <IoBagOutline
                      style={{ fontSize: "1.25rem", color: "blue" }}
                    />
                    Ecommerce
                  </span>
                </AccordionTrigger>
                {AppSidebar?.map((item, index) => (
                  <AccordionContent key={index}>
                    <Link
                      to={item.href}
                      className="block p-2 font-bold  text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {item.title}
                    </Link>
                  </AccordionContent>
                ))}
                <ul className="flex flex-col gap-5 mt-3">
                  <li className="flex items-center gap-2 font-medium text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <IoChatbubbleEllipsesOutline />
                    Chat
                  </li>
                  <li className="flex items-center gap-2 font-medium text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <MdEmail />
                    Email
                  </li>
                  <li className="flex items-center gap-2 font-medium text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <SlCalender />
                    Calender
                  </li>
                  <li className="flex items-center gap-2 font-medium text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <RiTodoLine />
                    Todo
                  </li>
                  <li className="flex items-center gap-2 font-medium text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <MdContacts />
                    Contacts
                  </li>
                </ul>
              </AccordionItem>
            </Accordion>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
