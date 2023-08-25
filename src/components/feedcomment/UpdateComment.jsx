import { useState } from "react"
import { useRecoilValue } from "recoil"
import { me } from "../../atoms/MeAtom"
import { apiWithToken } from "../../network/api"
import { useQuery, useQueryClient } from "react-query"
import styled from "styled-components";


const UpdateButton = styled.button`
  background-color: #3A6DF0;
  border: none;
  padding: 8px 26px;
  color: #fff;
  border-radius: 20px;
  margin-top: 16px;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
`;


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
            <UpdateButton type="submit">전송</UpdateButton>
        </form>
    </>

}

export default UpdateComment