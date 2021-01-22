import styled from 'styled-components';

export const Container = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px;
	background: linear-gradient(180deg, #24611F 0%, #67D93F 100%);

	> h3{
		color: #ffffff;
		font-size: 18px;
	}

	@media(width: 540px){
		width: 107%;
	}

	@media(width: 425px){
		width: 136%;
	}

	@media(width: 414px){
		width: 139.5%;
	}

	@media(width: 411px){
		width: 141%;
	}

	@media(width: 375px){
		width: 154%;
	}

	@media(width: 360px){
		width: 160.7%;
	}

	@media(width: 320px){
		width: 181%
	}

	@media(width: 280px){
		width: 206%;
	}
`;

export const Image = styled.img`
	width: 30px;
  height: 31px;
`;
