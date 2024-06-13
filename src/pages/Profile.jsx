import { useState } from "react";
import styled from "styled-components";
import BackDrop from "../components/Modal/BackDrop";
import { useModal } from "../components/Modal/Modal.context";
import { updateProfile } from "../lib/api/auth";
import { StyledButton } from "../style/styled";
import useUserStore from "../zustand/useUserStore";

function Profile() {
  const modal = useModal();

  const { user, setUser } = useUserStore();

  const [nickname, setNickname] = useState(user.nickname);
  const [avatar, setAvatar] = useState(null);

  // const updateUser = useUserStore((state) => state.updateUser);

  const handleUpdateProfile = async () => {
    if (window.confirm("입력된 정보로 변경 하시겠습니까?")) {
      const formData = new FormData();
      formData.append("nickname", nickname);
      formData.append("avatar", avatar);
      const response = await updateProfile(formData);

      if (response.success) {
        setUser({
          ...user,
          nickname: response.nickname,
          avatar: response.avatar,
        });
      }
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
        <FileInput
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
        <StyledButton bgcolor={"#5993ff"} onClick={handleUpdateProfile}>
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
  width: 96%;
  border-radius: 5px;
`;
const FileInput = styled.input`
  padding: 10px;
  width: 96%;
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
