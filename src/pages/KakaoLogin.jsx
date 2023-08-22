import { useEffect } from "react"
import kakaoImage from "../assets/kakao.png"
import { apiCall } from "../services/api"
import axios from "axios"

const KakaoLogin = () => {
    const Rest_api_key = '0481608acb1964ced77daf1090a65a04'
    const redirect_uri = 'http://localhost:3000'
    const kakaoURL = `https://kauth.kakao.com/ouath/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = () => {
        window.location.href = kakaoURL
    }
    const urlSearchParams = new URLSearchParams(window.location.href);
    const code = urlSearchParams.get("code");
    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const code = urlSearchParams.get("code");

        if (code) {
            const data = fetchToken(code);
            console.log(data)
        }
    }, []);

    const fetchToken = async (code) => {
        const grant_type = 'authorization_code'
        const client_id = `${Rest_api_key}`

        const res = await axios.post(
            `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}`,
            {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                },
            },
        )
        console.log(res)
        console.log(res.data.access_token)


        const userInfo = await loadToken(res.data.access_token)
        console.log(userInfo)
    }
    const loadToken = async (accessToken) => {
        const res = await axios.post(`https://kapi.kakao.com/v2/user/me`,
            {},
            {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + accessToken
                }
            }
        )
        console.log(res.data.kakao_account.email)
        console.log(res.data.properties.nickname)
        return res
    }


    return (
        <>

            <img src={kakaoImage} onClick={handleLogin} alt="kakao" />

        </>
    )
}

export default KakaoLogin