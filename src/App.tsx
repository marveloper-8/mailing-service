import { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from './styles/global';
import {useTheme} from './theme/useTheme';
import * as STYLE from './styles/main'
import Navigation from './components/navigation';
import Mail from './containers/mail';
import Sent from './containers/sent';
import './app.scss'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // 3: Get the selected theme, font list, etc.
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
   }, [themeLoaded]);

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>
        <Router>
          <STYLE.Container style={{fontFamily: selectedTheme.font}}>
            <Navigation />
            <STYLE.ContainerInner>
              {/* <Mail /> */}
                <Routes>
                  <Route path="/" element={<Mail />} />
                  <Route path="/sent" element={<Sent />} />
                </Routes>
            </STYLE.ContainerInner>
          </STYLE.Container>
        </Router>
      </ThemeProvider>
    }
    </>
  );
}

export default App;