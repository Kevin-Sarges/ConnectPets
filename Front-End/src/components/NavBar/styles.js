import styled from 'styled-components';

export const Nav = styled.header`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: var(--background-header);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Image = styled.img`
	width: 30px;
  height: 31px;
`;

export const Hamburger = styled.div`
  flex-direction: column;
  cursor: pointer;

  span{
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;

    @media(max-width: 768px){
      display: flex;
    }
  }
`;

export const Menu = styled.div`
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

  &:hover{
    background: var(--hover-button-header);
    border-radius: 8px;
  }
`;
