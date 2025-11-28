import { useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Users from "./pages/Users"
import List from "./pages/List"
import Orders from "./pages/Orders"
import Add from "./pages/Add"

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "")

  return (
    <main className="w-full bg-gray-50 min-h-screen">
      <Navbar token={token} setToken={setToken} />
      <div className="flex w-full">
        <div className="w-[18%] fixed min-h-screen border-r-2">
          <Sidebar />
        </div>
        <div className="flex-1 px-5 py-2 ml-[18%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </div>
      </div>

    </main>
  )
}

export default App
