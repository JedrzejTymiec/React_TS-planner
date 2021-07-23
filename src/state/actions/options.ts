import options from '../../options.json';
import { Dispatch } from 'redux';
import { ActionType } from '../types/actionTypes';
import { Options } from '../types/options';

export const setOptions = () => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: ActionType.SET_OPTIONS,
      payload: options,
    });
};

export const newOptions = (newOpt: Options) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: ActionType.SET_OPTIONS,
      payload: newOpt,
    });
};
