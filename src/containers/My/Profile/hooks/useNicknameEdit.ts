import { useState } from 'react';

export const useNicknameEdit = (originalNickname: string) => {
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState(originalNickname);

  const isSame = nickname === originalNickname;
  const isEmpty = nickname === '';
  const isError = isEmpty;

  const handleClickButton = () => {
    if (!isEditing) {
      setIsEditing(true);
      return;
    }
    if (isSame) {
      setIsEditing(false);
      return;
    }
  };

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return {
    nickname,
    isEditing,
    isError,
    handleClickButton,
    buttonText: getInputButtonText(isEditing, isSame),
    bottomText: getInputBottomText(isEmpty),
    handleChangeNickname,
  };
};

const getInputButtonText = (isEditing: boolean, isSame: boolean) => {
  if (isEditing) {
    return isSame ? '취소' : '저장';
  }
  return '수정';
};

const getInputBottomText = (isEmpty: boolean) => {
  if (isEmpty) {
    return '닉네임을 입력해주세요.';
  }
};
