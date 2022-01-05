import { useState } from 'react';
import * as STYLE from '../../styles/navigation/top'

const NavigationTop = () => {
    const [search, setSearch] = useState("Inbox")
  return (
      <STYLE.Container>
          <STYLE.Logo>LOGO</STYLE.Logo>
          <STYLE.TextInput
            type="text"
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
          />
          <STYLE.Profile>
              Joshua
              <STYLE.ProfileImage />
          </STYLE.Profile>
      </STYLE.Container>
  );
}

export default NavigationTop;