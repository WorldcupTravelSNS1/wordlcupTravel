import { atom } from "recoil";

export const feedGetState = atom({
    key: 'feedGetState',
    default: {
        title: null,
        content: null,
        tema: null,
        pageNumber: 0,
        pageSize: 10
    },
});



export const feedPostState = atom({
    key: "feedPostState",
    default: {
        memberId:-1,
        title:"",
        content:"",
        tema:"",
        imageUrl:""
    }
})