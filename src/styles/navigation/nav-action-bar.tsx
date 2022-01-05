import styled from "styled-components";
import * as INTERFACE from '../../helpers/interface'

export const Container = styled.section<INTERFACE.NavigationModel>`
    display: flex;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.color1};
    align-items: center;
    box-shadow: .1px .1px 5px .1px ${({ theme }) => theme.colors.colorAlt};
    padding: 20px 20px;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 40px);
`;

export const Section = styled.div`
    display: flex;
    align-items: center;
`;

export const SelectAll = styled.span`
    padding-right: 15px;
    margin-right: 15px;
    border-right: 1px solid ${({ theme }) => theme.colors.text};
`;

export const Icon = styled.div<INTERFACE.NavigationModel>`
    display: flex;
    align-items: center;
    padding-right: 30px;
    font-size: 17.5px;
    cursor: pointer;
    ${props => props.navigation && `padding-left: 30px;`}
    &:last-child{
        padding-right: 0;
    }
`;