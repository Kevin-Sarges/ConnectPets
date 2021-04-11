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

export const PreviewImage = styled.img`
	width: 250px;
	margin-bottom: 10px;
`;

export const Footer = styled.footer`
	font-size: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media(max-width: 325px) {
		font-size: 13px;
	}

	@media(max-width: 318px) {
		font-size: 12px;
	}
`;

export const Description = styled.div`
	text-align: justify;
`;

export const Button = styled.a`
	margin: 15px;
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

	@media(max-width: 349px) {
		margin: 0;
	}
`;

export const Text = styled.p`
	margin-top: 200px;
`;
