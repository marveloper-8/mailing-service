import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    display: flex;
    background: ${({ theme }) => theme.colors.color1};
    align-items: center;
    box-shadow: .1px .1px 5px .1px ${({ theme }) => theme.colors.colorAlt};
    z-index: 100;
`;

export const Section = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
    &:last-child{
        border: none;
    }
`;

export const Compose = styled.button`
    display: block;
    width: 80%;
    margin: auto;
    box-shadow: .1px .1px 5px .1px ${({ theme }) => theme.colors.colorAlt};
`;