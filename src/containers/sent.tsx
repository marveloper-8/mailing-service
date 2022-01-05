import * as STYLE from '../styles/mail'
import NavActionBar from '../components/navigation/nav-action-bar';
import Footer from '../components/footer';

const Mail = () => {
    
  return (
    <STYLE.Container>
      <NavActionBar />  
      <STYLE.Mail>
        <h1>Sent</h1>
      </STYLE.Mail>
      <Footer />
    </STYLE.Container>
  );
}

export default Mail;