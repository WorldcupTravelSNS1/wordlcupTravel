import { atom } from "recoil";


export const me = atom({
    key: 'me', // unique ID (with respect to other atoms/selectors)
    default: {
        isLogin: false,
        token: "",
        nickname: "",
        memberId: ""
    }, // default value (aka initial value)
});



