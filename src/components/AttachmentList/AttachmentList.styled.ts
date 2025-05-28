import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Thumb = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 4px;
  padding: 3px;
  color: white;
  cursor: pointer;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const FileInputZone = styled.label<{ isDragActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: ${({ theme, isDragActive }) =>
    isDragActive ? theme.background : theme.backgroundSecondary};
  color: ${({ theme }) => theme.secondaryText};
  border: 2px dashed
    ${({ theme, isDragActive }) =>
      isDragActive ? theme.primary : theme.borderColor};
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.animation},
    border-color ${({ theme }) => theme.animation};
`;
