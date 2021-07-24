import data from '../../data.json';
import { Dispatch } from 'redux';
import { ActionType } from '../types/actionTypes';
import { Day } from '../types/days';

export const setData = () => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: ActionType.SET_DATA,
      payload: data.days,
    });
};

export const newData = (data: Day[]) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: ActionType.SET_DATA,
      payload: data,
    });
};
