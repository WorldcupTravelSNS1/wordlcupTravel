import { useState } from "react"
import { useRecoilValue } from "recoil"
import { me } from "../../atoms/MeAtom"
import { apiWithToken } from "../../network/api"
import { useQueryClient } from "react-query"

const UpdateComment = ({ commentId }) => {
    const [comment, setComment] = useState("")
    const meData = useRecoilValue(me)
    const queryClient = useQueryClient()

    const onSubmitHandelr = async (e) => {
        e.preventDefault()
        await apiWithToken(`http://localhost:8080/api/v1/comment/${commentId}`, "PUT", { comment },
            { "Authorization": meData.token })

        queryClient.invalidateQueries('todosComment');
    }

    return <>
        <form onSubmit={onSubmitHandelr}>
            <input onChange={e => setComment(e.target.value)} />
            <button type="submit">전송</button>
        </form>
    </>

}

export default UpdateComment