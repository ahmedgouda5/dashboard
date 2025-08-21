import { Route, Routes } from "react-router"
import DashboardHome from "./dashboard/pages/dashboardHome"
import Layout from "./components/Layout"
import Sales from "./dashboard/pages/Sales"
import Finance from "./dashboard/pages/Finance"

const App = () => {
  return (
  <Routes>
    
    <Route path="/" element={<Layout />}>
      <Route index element={<DashboardHome />} />
      <Route path="analytics" element={<DashboardHome />} />
      <Route path="sales" element={<Sales />} />
      <Route path="finance" element={<Finance />} />
      <Route path="*" element={<h1>Settings</h1>} />
    </Route>
  </Routes>
  )
}

export default App
