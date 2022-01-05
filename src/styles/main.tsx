import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    height: 100vh;
    position: fixed;
    width: 100vw;
`;

export const ContainerInner = styled.div`
    min-height: calc(100vh - 50px);
    margin-top: 50px;
    position: relative;
    width: calc(100% - 100px);
    display: block;
`;