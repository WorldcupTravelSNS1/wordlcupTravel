import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import KakaoLogin from "../pages/KakaoLogin"
import Worldcup from "../pages/Worldcup"
import { world } from "../data/world"

const MyRouters = () => {
    const [contry] = useState(world)
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<KakaoLogin />} />
            <Route path='/api/v1/worldcup' element={<Worldcup contry={contry} />} />


        </Routes>
    </BrowserRouter>
}
export default MyRouters;