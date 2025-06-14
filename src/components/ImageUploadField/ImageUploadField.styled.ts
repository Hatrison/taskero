import styled from "styled-components";

export const FileDropZone = styled.div<{ isDragActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme, isDragActive }) =>
    isDragActive ? theme.background : theme.backgroundSecondary};
  border: 2px dashed
    ${({ theme, isDragActive }) =>
      isDragActive ? theme.primary : theme.borderColor};
  border-radius: 8px;
  padding: 32px 24px;
  text-align: center;
  cursor: pointer;
  gap: 12px;
  transition: background-color ${({ theme }) => theme.animation},
    border-color ${({ theme }) => theme.animation};
`;

export const UploadText = styled.div`
  color: ${({ theme }) => theme.secondaryText};
`;

export const UploadButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.secondaryText};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.animation};

  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }
`;

export const PreviewImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
  background-color: #ccc;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
`;
