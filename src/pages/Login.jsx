import { useNavigate } from "react-router";
import googleImage from "../assets/google.png";
import sheepImage from "../assets/sheep.gif";
import planeImage from "../assets/plane.gif";
import { myAxios } from "../services/api";
import { useState } from "react";

const Login = () => {
    const nav = useNavigate();
    const [status, setStatus] = useState("idle"); // 상태값 초기화

    // const loginHandle = async (e) => {
    //     e.preventDefault();

    //     try {
    //         // const response = await myAxios("/api/v1/member", "POST", { userName });
    //         setStatus(response.status);

    //         if (response.status === "로그인 성공") {
    //             localStorage.setItem("id", response.body.name);
    //             nav("/worldcup"); 
    //         }
    //     } catch (error) {
    //         console.error("로그인 에러:", error);
    //     }
    // };

    return (<>
        <img src={sheepImage} alt="sheep" />
        <div>
            <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=profile&include_granted_scopes=true&response_type=code&redirect_uri=http://localhost:8080/login/oauth/code/google&client_id=782445136437-gjq3co4n7slgd4k0lfo6u8hfb0mcnohu.apps.googleusercontent.com" >
                <img src={googleImage} alt="google" />
            </a>
        </div>
        <img src={planeImage} alt="sheep" /><img src={planeImage} alt="sheep" /><img src={planeImage} alt="sheep" /><img src={planeImage} alt="sheep" /><img src={planeImage} alt="sheep" />
    </>
    );
};

export default Login;