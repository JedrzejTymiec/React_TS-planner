import data from '../../data.json';
import { Dispatch } from 'redux';
import { ActionType } from '../types/actionTypes';

export const setData = () => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: ActionType.SET_DATA,
      payload: data.days,
    });
};
