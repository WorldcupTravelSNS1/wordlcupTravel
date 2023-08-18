import { Link } from "react-router-dom";

const Login = () => {

    return <>
        <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=profile&include_granted_scopes=true&response_type=code&
redirect_uri=http://localhost:8080/login/oauth/code/google&
client_id=782445136437-gjq3co4n7slgd4k0lfo6u8hfb0mcnohu.apps.googleusercontent.com"><img src="/google.png" alt="google" /></a>
    </>
}
export default Login;