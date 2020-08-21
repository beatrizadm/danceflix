import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TableC = styled.tr`
    :hover{
        background-color: ${(props) => props.fieldColor || 'blue'};
    } 
`;