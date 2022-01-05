import styled from "styled-components";

export const Container = styled.section`
    width: calc(100% - 40px);
    display: grid;
    background: ${({ theme }) => theme.colors.color1};
    align-items: center;
    box-shadow: .1px .1px 5px .1px ${({ theme }) => theme.colors.colorAlt};
    grid-template-columns: 1fr 1fr 1fr;
    position: fixed;
    top: 0;
    left: 0;
    height: 30px;
    padding: 10px 20px;
    z-index: 101;
`;

export const Logo = styled.div`
    font-weight: bolder;
    font-size: 15px;
`;

export const TextInput = styled.input`
    background: none;
    outline: none;
    border: none;
    border-radius: 2.5px;
    border: 1px solid ${({ theme }) => theme.colors.text};
    padding: 0 10px;
    height: 90%;
    color: ${({ theme }) => theme.colors.text};
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const ProfileImage = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 25px;
    border: 2px solid ${({ theme }) => theme.colors.active};
    background: grey;
    margin-left: 10px;
`;