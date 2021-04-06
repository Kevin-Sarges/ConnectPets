import styled from 'styled-components';

export const StyledBurger = styled.div`
  flex-direction: column;
  cursor: pointer;
  
  span{
		position: relative;
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
		transition: all 0.3s linear;
		transform-origin: 1px;

		:first-child {
			transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
			top: -2px;
		}

		:nth-child(2) {
			opacity: ${({ open }) => open ? '0' : '1'};
			transform: ${({ open }) => open ? 'translateX(-20px)' : 'translateX(0)'};
		}

		:nth-child(3) {
			transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
			top: 2px;
		}

    @media(max-width: 768px){
      display: flex;
    }
  }
`;
