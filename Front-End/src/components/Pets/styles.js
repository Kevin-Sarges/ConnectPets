import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 70px;
	margin-bottom: -50px;
  padding: 20px;
	border-radius: 7px;
	border: 1px solid var(--border-container);
	background-color: var(--background-container);

	@media(max-width: 935px){
		> p{
			font-size: 12px;
		}
	}
`;

export const StyleImage = styled.img`
	width: 300px;
	border-radius: 8px;
	margin-bottom: 10px;
`;

export const Footer = styled.footer`
	font-size: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Description = styled.div`
	text-align: justify;
`;

export const Button = styled.button`
	padding: 6px 10px;
	display: flex;
	align-items: center;
	text-decoration: none;
	border: none;
	border-radius: 10px;
	color: var(--text-color-button);
	background: var(--button-home);
	cursor: pointer;
	&:hover{
		background: var(--button-home-hover);
	}
`;
