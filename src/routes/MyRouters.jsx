import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../components/auth/Login"
import Worldcup from "../components/Worldcup"
import { world } from "../data/world"

const MyRouters = () => {
    const [contry] = useState(world)
    return <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Worldcup contry={contry} />} />
        </Routes>
    </BrowserRouter>
}
export default MyRouters;