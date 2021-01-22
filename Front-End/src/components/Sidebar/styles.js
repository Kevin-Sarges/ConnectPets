import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 40px;
	text-align: justify;
`;

export const SidebarMenu= styled.div`
	padding: 5px 30px;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	background: #f4f0f0;
	border: 1px solid #c4c4c4;

	> a{
		margin: 15px 0px;
		text-decoration: none;
		color: #4F4C4C;
		font-weight: 600;
		font-family: 'Roboto', sans-serif;
		&:hover{
			color: #67D93F;
		}
	}
`;
