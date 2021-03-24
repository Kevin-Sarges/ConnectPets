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
	color: var(--text-color-form);
	background: var(--background-container);
  border: 1px solid var(--border-container);
`;

export const Div = styled.div`
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
			color: var(--span-inputs);
		}
	}

	> input{
		padding: 8px;
		border-radius: 8px;
		background: var(--background-inputs);
		border: 1px solid var(--span-inputs);
		color: var(--span-inputs);
		font-size: 14px;
	}

	#photo::-webkit-file-upload-button{
		border-radius: 8px;
		text-decoration: none;
		border: 1px solid var(--button-form);
		color: var(--button-form);
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
		background: var(--button-form);
		color: var(--color-button-form);
		cursor: pointer;

		&:hover{
			background: var(--button-form-hover);
		}
	}
`;
