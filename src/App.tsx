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

const App = () => {
  const dispatch = useDispatch();

  const { getData } = bindActionCreators(daysActions, dispatch);
  const { getOptions } = bindActionCreators(optionsActions, dispatch);

  useEffect(() => {
    getData();
    getOptions();
  }, [getData, getOptions]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </>
  );
};

export default App;
