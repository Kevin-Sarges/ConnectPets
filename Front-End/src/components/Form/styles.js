import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  width: 90vw;
  height: 100vh;

  > form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Fieldset = styled.fieldset`
	margin-top: 84px;
	text-align: justify;
	color: #5c8999;
	background: #f4f0f0;
  border: 1px solid #c4c4c4;
`;

export const Legend = styled.h4`
	margin: 20px 0px;
	text-align: center;
	font-size: 20px;
`;

export const ImagesPet = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Inputs = styled.div`
	margin: 15px;
	display: flex;
	flex-direction: column;

	> label{
		font-size: 16px;

		> span{
			font-size: 12px;
			color: #b4a9b9;
		}
	}

	> input{
		padding: 8px;
		border-radius: 8px;
		background: #f0f0f0;
		border: 1px solid #c4c4c4;
		color: #5c8999;
	}

	#photo::-webkit-file-upload-button{
		border-radius: 8px;
		text-decoration: none;
		border: 1px solid #188a24;
		color: #188a24;
		cursor: pointer;
	}

	#photo{
		width: 100%;
	}

	#age{
		width: 100%;
	}
`;

export const Footer= styled.footer`
	margin: 20px;
	text-align: center;

	> button{
		padding: 10px;
		border-radius: 8px;
		border: none;
		background: #188a24;
		color: #ffffff;
		cursor: pointer;

		&:hover{
			background: #0ca81b;
		}
	}
`;
