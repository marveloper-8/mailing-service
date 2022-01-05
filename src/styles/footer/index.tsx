import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.color1};
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.colorAlt};
    padding: 20px 20px;
    justify-content: space-between;
    width: calc(100% - 40px);
`;