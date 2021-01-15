import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  width: 90vw;
  height: 100vh;

  > form{
    margin: 20px 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f4f0f0;
    border: 1px solid #c4c4c4;

    @media(max-width: 1024px){
      margin: 10px 264px;
    }

    @media(max-width: 768px){
      margin: 10px 174px;
    }

    @media(max-width: 540px){
      margin: 10px 65px;
    }

    @media(max-width: 414px){
       margin: 10px 19px;
    }

    @media(max-width: 375px){
      margin: 10px 2px;
    }

    @media(max-width: 320px){
      margin: 10px 2px;
    }

    @media(max-width: 280px){
      margin: 10px 0px;
      font-size: 12px;
    }
  }
`;

export const Fieldset = styled.fieldset`
	text-align: justify;
	color: #5c8999;
	border: none;
`;

export const Legend = styled.h4`
	margin: 20px 0px;
	text-align: center;
	font-size: 20px;
`;

export const Inputs = styled.div`
	margin: 10px;
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
