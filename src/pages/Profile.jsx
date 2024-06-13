import { useState } from "react";
import styled from "styled-components";
import BackDrop from "../components/Modal/BackDrop";
import { useModal } from "../components/Modal/Modal.context";
import { StyledButton } from "../style/styled";
import useUserStore from "../zustand/useUserStore";

function Profile() {
  const modal = useModal();

  const { user } = useUserStore();

  const [nickname, setNickname] = useState(user.nickname);
  const [avatar, setAvatar] = useState(null);

  const updateUser = useUserStore((state) => state.updateUser);

  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
      console.log(avatar);
    } else {
      setAvatar(null);
    }
  };

  const handleClickUpdateUser = () => {
    if (window.confirm("입력된 정보로 변경 하시겠습니까?")) {
      const updateFields = { nickname: nickname, avatar: avatar };
      updateUser(updateFields);
      modal.close();
    }
  };

  return (
    <BackDrop>
      <ProfileWarpper>
        <ProfileLable>프로필 수정 </ProfileLable>
        <ProfileLable>닉네임</ProfileLable>
        <NicknameInput
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <ProfileLable>아바타 이미지</ProfileLable>
        <FileInput type="file" value={avatar} onChange={handleFileChange} />
        <StyledButton bgcolor={"#5993ff"} onClick={handleClickUpdateUser}>
          프로필 업데이트
        </StyledButton>
        <StyledButton bgcolor={"#909090"} onClick={modal.close}>
          닫기
        </StyledButton>
      </ProfileWarpper>
    </BackDrop>
  );
}

export default Profile;

const ProfileLable = styled.span`
  font-size: 25px;
  font-weight: 700;
  margin: 10px;
`;
const NicknameInput = styled.input`
  font-size: 25px;
`;
const FileInput = styled.input`
  border: 1px solid;
  padding: 10px;
`;
const ProfileWarpper = styled.div`
  background-color: white;
  padding: 15px;
  width: 500px;
  height: 360px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
`;
