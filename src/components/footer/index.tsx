import * as STYLE from '../../styles/footer';

const Footer = () => {

  return (
      <STYLE.Container>
        Mail &copy; {new Date().getFullYear()}. All rights reserved
      </STYLE.Container>
  );
}

export default Footer;