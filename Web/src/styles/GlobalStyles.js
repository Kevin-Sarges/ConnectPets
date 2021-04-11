import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	:root{
		--text-color-default: #4F4C4C;
		--background-color-default: #e8eaed;

		--background-header: linear-gradient(180deg, #24611F 0%, #67D93F 100%);
		--text-header: #fff;
		--hover-button-header: #67D93F;
		--button-dropzone: #20A51D;

		--background-container: #ffffff;
		--border-container: #c4c4c4;

		--text-color-form: #5c8999;
		--button-form: #188a24;
		--button-form-hover: #0ca81b;
		--color-button-form: #fff;

		--span-inputs: #b4a9b9;

		--text-color-button: #fff;
		--button-home: #03ce60;  
		--button-home-hover: #03eb6e; 
	}

	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html{
		max-width: 100vw;
		max-height: 100vh;
	}

	body{
		color: var(--text-color-default);
		background: var(--background-color-default);
	}

	body, input, button{
		font: 400 1rem/1 'Roboto', sans-serif;
	}

	h1, h2, h3, h4{
		font-family: 'Sansita', cursive;
	}
`;