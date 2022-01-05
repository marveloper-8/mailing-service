import { createGlobalStyle} from "styled-components";


export const theme = {
    colors: {
      body: "#FFFFFF",
      text: "#000000",
      button: {
        text: "#FFFFFF",
        background: "#000000"
      },
      link: {
        text: "teal",
        opacity: 1
      }
    },
    font: "Tinos"
}

export type MyProps = {
    theme: typeof theme
}

export const GlobalStyles = createGlobalStyle<MyProps>`
  body {
    background: ${({ theme }) => theme.colors.body};
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
    height: 100vh;
  }

  Link{
    text-decoration: none;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }

  button {
    border: 0;
    outline: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bolder;
    background: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }
`;