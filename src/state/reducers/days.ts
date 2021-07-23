import { ActionType } from '../types/actionTypes';
import { Data, DaysAction } from '../types/days';

const initalState = {};

const daysReducer = (
  state: Data = initalState,
  { type, payload }: DaysAction,
) => {
  switch (type) {
    case ActionType.SET_DATA:
      return { ...state, days: payload };
    default:
      return state;
  }
};

export default daysReducer;
