import { useState } from "react"
import { apiNoToken, apiWithToken } from "../../network/api"
import { useRecoilValue, useResetRecoilState } from "recoil";
import { me } from "../../atoms/MeAtom";
import { useNavigate } from "react-router";
import { useQuery, useQueryClient } from "react-query";
import { async } from "q";


const PostComment = () => {

    const queryParams = new URLSearchParams(window.location.search);
    const boardId = queryParams.get('boardId'); // boardid 값을 가져옴
    const meData = useRecoilValue(me)
    const nav = useNavigate()
    const queryClient = useQueryClient()


    const [comment, setComment] = useState("")
    const onSubmitHandelr = async (e) => {
        e.preventDefault()
        await apiWithToken(`http://localhost:8080/api/v1/comment/${boardId}`, "POST",
            {
                comment,
                memberId: meData.memberId
            }, { "Authorization": meData.token })

        queryClient.invalidateQueries('todosComment');

    }



    return <>
        <form onSubmit={onSubmitHandelr}>
            <input name="comment" value={comment} onChange={e => setComment(e.target.value)} placeholder="커맨트 작성" />
            <button type="submit">등록하기</button>
        </form>

    </>
}


export default PostComment