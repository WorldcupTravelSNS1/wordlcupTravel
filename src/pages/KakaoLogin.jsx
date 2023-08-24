
import kakaoImage from "../assets/kakao.png"

const KakaoLogin = () => {
    const Rest_api_key = '0481608acb1964ced77daf1090a65a04'
    const redirect_uri = 'http://localhost:3000'
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`

    const handleLogin = () => {
        window.location.href = kakaoURL
    }


    return (
        <>

            <img src={kakaoImage}
                onClick={handleLogin} alt="kakao" />

        </>
    )

}
export default KakaoLogin