import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 84px;
	margin-bottom: 20px;
  	padding: 20px;
	border-radius: 7px;
	border: 1px solid #c4c4c4;
	background-color: #f4f0f0;
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
	padding: 10px 20px;
	display: flex;
	align-items: center;
	text-decoration: none;
	border: none;
	border-radius: 10px;
	color: #ffffff;
	background: #03ce60;
	cursor: pointer;
	&:hover{
		background: #03eb6e;
	}
`;
