import axios from 'axios'

export const api = async (path, method, body) => {
    const init = method === "GET" ? {} : {
        method
        , headers: { "Content-Type": "application/json" }
        , body: JSON.stringify(body)
    }
    // const response = { body: "", status: "" }
    try {
        const response = await fetch(`http://localhost:8080${path}`, init)
        // .then((res) => {
        //     return res.json()
        // }).then((member) => {
        //     response.body = member
        //     response.status = "success"
        // }).catch((err) => {
        //     console.log(err)
        //     response.status = "error"
        // })
        const body = await response.json()
        return { body, status: "success" }
    } catch (error) {
        return { body, status: "error" }
    }

}

axios.defaults.baseURL = "http://localhost:8080"

export const myAxios = async (url, method, body) => {
    const token = localStorage.getItem("token");
    const headers = {
        "Authorization": `Bearer ${token}`, // 토큰 전달
        "Content-Type": "application/json"
    };

    try {
        const response = await axios({
            method, url, data: body, headers
        });

        return {
            body: response.data,
            status: response.status
        };
    } catch (error) {
        return { body: null, status: "error" };
    }
};

export const apiCall = async (url, method, bodys, headers) => {
    const body = await axios({
        method, url, bodys, headers
    })
    return body
}