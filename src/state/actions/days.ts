import data from '../../data.json';
import { Dispatch } from 'redux';
import { ActionType } from '../types/actionTypes';

export const getData = () => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: ActionType.GET_DATA,
      payload: data.days,
    });
};
