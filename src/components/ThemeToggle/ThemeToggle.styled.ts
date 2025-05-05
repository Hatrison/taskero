import styled from "styled-components";

export const Toggle = styled.button`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
