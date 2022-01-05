import styled from "styled-components";
import * as INTERFACE from '../../helpers/interface'

export const Container = styled.section<INTERFACE.MailPreviewModel>`
    display: grid;
    grid-template-columns: ${props => props.hovered 
        ? `7.5% 20% 60% 12.5%` 
        : `7.5% 20% 65% 7.5%`
    };
    color: ${({ theme }) => theme.colors.text};
    background: ${props => props.read ? ({ theme }) => theme.colors.color1 : ({ theme }) => theme.colors.colorAlt};
    align-items: center;
    border-bottom: .5px solid grey;
    padding: 20px 20px;
    justify-content: space-between;
    width: calc(100% - 40px);
    transition: .3s ease all;
    cursor: pointer;
    &:hover{
        border-bottom: .5px solid ${props => props.read ? ({ theme }) => theme.colors.color1 : ({ theme }) => theme.colors.colorAlt};
    };
`;

export const Section = styled.div<INTERFACE.MailPreviewModel>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    overflow: hidden;
    margin-right: 20px;
    position: relative;
    &:last-child{
        margin: 0;
        justify-content: flex-end;
    }
`;

export const Icon = styled.div<INTERFACE.MailPreviewModel>`
    display: flex;
    align-items: center;
    padding-right: ${props => props.hovered ? `15px` : `30px`};
    font-size: 17.5px;
    cursor: pointer;
    &:last-child{
        padding-right: 0;
    }
`;

export const Ellipsis = styled.span<INTERFACE.MailPreviewModel>`
    position: absolute;
    background: ${props => props.read ? ({ theme }) => theme.colors.color1 : ({ theme }) => theme.colors.colorAlt};
    height: 100%;
    top: 0;
    right: 0;
`;

export const Text = styled.span<INTERFACE.MailPreviewModel>`
    ${props => props.read && `
        font-weight: 700;
    `};
`;