import axios from "axios"
import { useRecoilValue } from "recoil"
import { me } from "../atoms/MeAtom"



export const apiNoToken = async (url, method, bodies, headers) => {
    const body = await axios({
        url, method, data: bodies,
        headers: { headers }
    }
    )
    return body.data

}

export const apiWithToken = async (url, method, bodies, header) => {
    const body = await axios({
        url, method, data: bodies,
        headers: header
    })

    return body
}





