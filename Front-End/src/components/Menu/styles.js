import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  text-decoration: none;
  > a{
    text-decoration: none;
  }
  @media(max-width: 768px){
    overflow: hidden;
    flex-direction:column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    > a{
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;

export const MenuLink = styled.a`
  padding: 10px 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: var(--text-header);

  &:hover {
    background: var(--hover-button-header);
    border-radius: 8px;
  }
`;