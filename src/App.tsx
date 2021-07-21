import { useEffect } from 'react';
import { daysActions } from './state';
import { optionsActions } from './state';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const App = () => {
  const dispatch = useDispatch();

  const { getData } = bindActionCreators(daysActions, dispatch);
  const { getOptions } = bindActionCreators(optionsActions, dispatch);

  useEffect(() => {
    getData();
    getOptions();
  }, [getData, getOptions]);

  return <div>HELLO</div>;
};

export default App;
