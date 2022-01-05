import * as STYLE from '../styles/mail'
import NavActionBar from '../components/navigation/nav-action-bar';
import MailPreview from '../components/mail/preview';
import Footer from '../components/footer';

const Mail = () => {
  const mail = [
    {
      name: 'Joshua Equere', 
      title: 'This is a title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem urna, varius ac imperdiet egestas, imperdiet at arcu. Fusce sodales mattis orci, vel feugiat ante aliquam vitae. Donec ornare, tortor luctus egestas pretium, dolor elit cursus eros, nec consectetur justo est et velit. Vestibulum imperdiet cursus congue. Etiam vel tristique quam',
      time: '15 : 31',
      read: false
    },
    {
      name: 'Samuel Equere', 
      title: 'Another title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem urna, varius ac imperdiet egestas, imperdiet at arcu. Fusce sodales mattis orci, vel feugiat ante aliquam vitae. Donec ornare, tortor luctus egestas pretium, dolor elit cursus eros, nec consectetur justo est et velit. Vestibulum imperdiet cursus congue. Etiam vel tristique quam',
      time: '11 : 23',
      read: true
    },
  ]
    
  return (
    <STYLE.Container>
      <NavActionBar />  
      <STYLE.Mail>
        {mail.map((item: any) => {
          return (
            <MailPreview data={item} />
          )
        })}
      </STYLE.Mail>
      <Footer />
    </STYLE.Container>
  );
}

export default Mail;