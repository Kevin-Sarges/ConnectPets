import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 15px;
	background: linear-gradient(180deg, #24611F 0%, #67D93F 100%);

	> h3{
		color: #ffffff;
		font-size: 18px;
	}
`;

export const Image = styled.img`
	width: 30px;
  height: 31px;
`;
