import styled from "styled-components";

export const GalleryWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const GalleryImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: background ${({ theme }) => theme.animation};

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  &:focus {
    outline: none;
  }
`;

export const PrevButton = styled(NavButton)`
  left: 16px;
`;

export const NextButton = styled(NavButton)`
  right: 16px;
`;
