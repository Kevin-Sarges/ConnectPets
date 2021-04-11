import styled from 'styled-components';

export const Container = styled.div`
max-width: 200px;
margin: 0 auto;
margin-top: 20px;
cursor: pointer;

p {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px 4px;
	border: 1px solid var(--button-dropzone);
	border-radius: 8px;
}

p:hover {
	border-color: var(--hover-button-header);
	color: var(--button-dropzone);
}
`;


export const PreviewImage = styled.div`
	margin-top: 10px;
	display: flex;
	min-width: 0;
	overflow: hidden;

	img {
		max-width: 200px;
		display: block;
		height: 100%;
	}
`;
