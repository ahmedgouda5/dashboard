import { Route, Routes } from "react-router"
import DashboardHome from "./dashboard/pages/dashboardHome"
import Layout from "./components/Layout"

const App = () => {
  return (
  <Routes>
    
    <Route path="/" element={<Layout />}>
      <Route index element={<DashboardHome />} />
    </Route>
  </Routes>
  )
}

export default App
