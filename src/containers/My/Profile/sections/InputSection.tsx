'use client';

import { Input } from '../components/Input/Input';
import { InputAddonText } from '../components/Input/compounds/AddonText';
import { useNicknameEdit } from '../hooks/useNicknameEdit';

export function InputSection() {
  const { nickname, isEditing, isError, handleClickButton, buttonText, bottomText, handleChangeNickname } =
    useNicknameEdit('톨머프');

  return (
    <Input
      className="mt-[12px]"
      placeholder="닉네임을 입력해주세요"
      value={nickname}
      onChange={handleChangeNickname}
      readOnly={!isEditing}
      error={isError}
      rightAddon={
        <button className="disabled:cursor-not-allowed" onClick={handleClickButton} disabled={isError}>
          <InputAddonText>{buttonText}</InputAddonText>
        </button>
      }
      bottomText={bottomText}
    />
  );
}
