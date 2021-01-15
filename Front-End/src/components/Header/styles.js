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

    > button{
        font-size: 14px;
        padding: 5px 20px;
        border-radius: 8px;
        border: 1px solid #24611F;
        color: #ffffff;
        background: none;
        cursor: pointer;
        &:hover{
            background: #24911F;
            border: 1px solid #24911F; 
        }
    }
`;
