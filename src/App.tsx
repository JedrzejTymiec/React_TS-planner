import { useEffect } from 'react';
import { daysActions } from './state';
import { optionsActions } from './state';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
//Style
import { GlobalStyle, theme } from './App.styles';
import { ThemeProvider } from 'styled-components';
//Components
import Navbar from './components/Navbar/Navbar';
import Planner from './components/Planner/Planner';
import Footer from './components/Footer/Footer';

const App = () => {
  const dispatch = useDispatch();

  const { setData } = bindActionCreators(daysActions, dispatch);
  const { setOptions } = bindActionCreators(optionsActions, dispatch);

  useEffect(() => {
    setData();
    setOptions();
  }, [setData, setOptions]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Planner />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
