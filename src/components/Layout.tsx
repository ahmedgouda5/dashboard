import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
      <header>
        <h1>Dashboard</h1>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout
