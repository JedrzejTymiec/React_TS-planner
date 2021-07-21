import options from '../../options.json';
import { Dispatch } from 'redux';
import { ActionType } from '../types/actionTypes';

export const getOptions = () => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: ActionType.GET_OPTIONS,
      payload: options,
    });
};
