import { useRecoilValue } from "recoil"
import { apiWithToken } from "../../network/api"
import { me } from "../../atoms/MeAtom"
import { useQueryClient } from "react-query"
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

const DeleteComment = ({ commentId }) => {

    const meData = useRecoilValue(me)

    const queryClient = useQueryClient()

    const onClickHandler = async () => {
        await apiWithToken(`http://localhost:8080/api/v1/comment/${commentId}`, "DELETE", "",
            { "Authorization": meData.token })
        queryClient.invalidateQueries('todosComment');
    }



    return <>
        <UpdateButton onClick={onClickHandler}>삭제</UpdateButton>
    </>
}

export default DeleteComment