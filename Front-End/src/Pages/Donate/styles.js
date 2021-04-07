import styled from 'styled-components';

export const Container = styled.main`
	margin: 0 auto;
	width: 90vw;
	height: 100vh;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const Section = styled.section`
	margin-top: 84px;
	color: var(--text-color-form);
	background: var(--background-container);
  	border: 1px solid var(--border-container);

	@media(max-width: 425px) {
		width: 100%;
	}

	@media(max-width: 375px) {
		width: 100%;
	}
`;

export const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media(max-width: 425px) {
		width: 54%;
		display: flex;
		flex-direction: column;

		input {
			width: 200%;
		}
	}

	@media(max-width: 375px) {
		width: 62%;
		display: flex;
		flex-direction: column;

		input {
			width: 172%;
		}
	}

	@media(max-width: 320px) {
		width: 72%;
		display: flex;
		flex-direction: column;

		input {
			width: 146%;
		}
	}
`;

export const Inputs = styled.div`
	margin: 15px;
	display: flex;
	flex-direction: column;

	label {
		font-size: 16px;

		> span {
			font-size: 12px;
			color: var(--span-inputs);
		}
	}

	input {
		padding: 8px;
		border-radius: 8px;
		border: 1px solid var(--span-inputs);
		font-size: 14px;
	}

	
	@media(max-width: 425px) {
		margin-bottom: 0;

		span {
			font-size: 10px;
		}
	}

	@media(max-width: 375px) {
		label {
			font-size: 14px;

			> span {
				font-size: 10px;
			}
		}
	}
`;

export const ButtonPost= styled.div`
	margin: 20px;
	text-align: center;

	button {
		padding: 10px;
		border-radius: 8px;
		border: none;
		background: var(--button-form);
		color: var(--color-button-form);
		cursor: pointer;

		&:hover {
			background: var(--button-form-hover);
		}
	}
`;
