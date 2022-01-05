import styled from "styled-components";
// utils
import  * as INTERFACE from "../../helpers/interface";

export const Container = styled.div<INTERFACE.NavigationModel>`
    display: flex;
    align-items: center;
    padding: 15px 20px;
    justify-content: space-between;
    width: 100px;
    transition: .25s ease all;
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.colors.colorAlt};
    ${props => props.active && `
        box-shadow: .5px .5px 5px .5px ${({ theme }: any) => theme.colors.colorAlt};
        color: ${({ theme }: any) => theme.colors.active};
    `};
    &:hover{
        box-shadow: .5px .5px 5px .5px ${({ theme }) => theme.colors.colorAlt};
        color: ${({ theme }) => theme.colors.active};
    };
    &:last-child{
        border: none;
    };
`;

export const Text = styled.div`
    margin-right: 10px;
`;

