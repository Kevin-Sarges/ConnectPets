import styled from 'styled-components';

export const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #EFFFFA;
	transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
	height: 100vh;
	text-align: left;
	padding: 2rem;
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;

	@media (max-width: 765px) {
		width: 100%;
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