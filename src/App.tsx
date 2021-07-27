import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import Page from './components/Routes/Page';

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
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Planner} />
            <Route
              exact
              path="/recipes"
              component={(props: any) => <Page text={'Recipes'} {...props} />}
            />
            <Route
              exact
              path="/challenge"
              component={(props: any) => <Page text={'Challenge'} {...props} />}
            />
            <Route
              component={(props: any) => (
                <Page text={'404 Not Found'} {...props} />
              )}
            />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
