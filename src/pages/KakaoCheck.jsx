import { useEffect, useState } from "react"
import { useRecoilState } from 'recoil';

import axios from "axios";
import { me } from "../atoms/MeAtom";
const KakaoCheck = () => {
    const [user, setUser] = useRecoilState(me);

    const Rest_api_key = '0481608acb1964ced77daf1090a65a04'
    const redirect_uri = 'http://localhost:3000'
    const urlSearchParams = new URLSearchParams(window.location.href);
    const code = urlSearchParams.get("code");
    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const code = urlSearchParams.get("code");

        if (code) {
            const data = fetchToken(code);


        }
    }, []);

    const fetchToken = async (code) => {
        console.log(code)

        const grant_type = 'authorization_code'
        const client_id = '0481608acb1964ced77daf1090a65a04'

        const res = await axios.post(
            `https://kauth.kakao.com/oauth/token`,
            `grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}`,
            {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }
        )
        const userInfo = await loadToken(res.data.access_token)

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
        console.log(res)
        const userData = await pushData(res.data.kakao_account.email, res.data.kakao_account.profile.nickname);
    }


    const pushData = async (email, nickname) => {
        const res = await axios.get(`http://localhost:8080/api/v1/auth?email=${email}&nickname=${nickname}`,
        )
        console.log(res)

        setUser({
            id: res.data.id,
            nickname: res.data.nickname,
            token: res.data.token
        });
        console.log(res.data.id, res.data.nickname, res.data.token)


        return res.data

    }
    return <></>
}
export default KakaoCheck