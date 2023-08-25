import { useRecoilValue } from "recoil"
import { apiWithToken } from "../../network/api"
import { me } from "../../atoms/MeAtom"
import { useQueryClient } from "react-query"


const DeleteComment = ({ commentId }) => {

    const meData = useRecoilValue(me)

    const queryClient = useQueryClient()

    const onClickHandler = async () => {
        await apiWithToken(`http://localhost:8080/api/v1/comment/${commentId}`, "DELETE", "",
            { "Authorization": meData.token })
        queryClient.invalidateQueries('todosComment');
    }



    return <>
        <button onClick={onClickHandler}>삭제</button>
    </>
}

export default DeleteComment