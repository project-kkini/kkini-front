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

const NICKNAME_EDIT_BUTTON_TEXT = {
  EDIT: '수정',
  SAVE: '저장',
  CANCEL: '취소',
};

const getInputButtonText = (isEditing: boolean, isSame: boolean) => {
  if (isEditing) {
    return isSame ? NICKNAME_EDIT_BUTTON_TEXT.CANCEL : NICKNAME_EDIT_BUTTON_TEXT.SAVE;
  }
  return NICKNAME_EDIT_BUTTON_TEXT.EDIT;
};

const getInputBottomText = (isEmpty: boolean) => {
  if (isEmpty) {
    return '닉네임을 입력해주세요.';
  }
};
