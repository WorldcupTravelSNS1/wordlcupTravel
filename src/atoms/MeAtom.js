import { atom } from "recoil";


export const me = atom({
    key: 'me', // unique ID (with respect to other atoms/selectors)
    default: {
        isLogin: true,
        token: "eyJhbGciOiJIUzM4NCJ9.eyJuYW1lIjoiZGxlaHJ1ZCIsImlkIjoxfQ.7g58xZ7YpA3O7UIUmZyCwfvtJKnQDei16tOqoMZi8LkUmEi4Xip-5UqVAhT6Beb8",
        nickname: "dlehrud",
        memberId: "1"
    }, // default value (aka initial value)
});



