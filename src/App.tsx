import { Route, Routes } from "react-router"
import DashboardHome from "./dashboard/pages/dashboardHome"
import Layout from "./components/Layout"
import Sales from "./dashboard/pages/Sales"
import Finance from "./dashboard/pages/Finance"
import Chat from "./dashboard/pages/App/chat"
import Email from "./dashboard/pages/App/Email"
import Contact from "./dashboard/pages/App/Contact"
import Calender from "./dashboard/pages/App/Calender"
import Todo from "./dashboard/pages/App/Todo"

const App = () => {
  return (
  <Routes>
    
    <Route path="/" element={<Layout />}>
      <Route index element={<DashboardHome />} />
      <Route path="analytics" element={<DashboardHome />} />
      <Route path="sales" element={<Sales />} />
      <Route path="finance" element={<Finance />} />
      <Route path="App/chat" element={<Chat />} />
      <Route path="App/email" element={<Email />} />
      <Route path="App/calender" element={<Calender />} />
      <Route path="App/todo" element={<Todo />} />
      <Route path="App/Contacts" element={<Contact />} />
      <Route path="*" element={<h1 className="flex justify-center items-center ">Error ya Basha</h1>} />
    </Route>
  </Routes>
  )
}

export default App
