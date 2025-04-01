import Navbar from "../components/Navbar"
import { NavLink, Outlet } from "react-router-dom"
import Footer from "../components/Footer"

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

    </>
  )
}

export default RootLayout