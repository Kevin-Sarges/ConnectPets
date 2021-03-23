import styled from 'styled-components';

export const ViewImage = styled.div`
	display: inline-flex;
  border-radius: 2;
  border: 1px solid #eaeaea;
  margin-bottom: 8;
  margin-right: 8;
  width: 100;
  height: 100;
  padding: 4;
  box-sizing: border-box;
`;

export const SizeImage = styled.div`
	display: flex;
  min-width: 0;
  overflow: hidden;

	img {
		display: block;
		max-width: 200px;
		height: 100%;
	}
`;

export const Section = styled.section`
	div {
		cursor: pointer;
		max-width: 200px;
		margin: 0 auto;

		p {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 15px 4px;
			border: 1px solid #20A51D;
			border-radius: 8px;
		}

		p:hover {
			border-color: #67D93F;
			color: #20A51D;
		}
	}
`;

export const Container = styled.aside`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 16;
`;
