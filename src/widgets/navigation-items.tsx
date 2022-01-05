import * as STYLE from '../styles/navigation/item'

const NavigationItem = (props: any) => {
    
  return (
      <STYLE.Container active={props.active}>
          <STYLE.Text>{props.text}</STYLE.Text>
          <div>{props.icon}</div>
      </STYLE.Container>
  );
}

export default NavigationItem;