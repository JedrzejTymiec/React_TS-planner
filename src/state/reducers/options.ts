import { ActionType } from '../types/actionTypes';

const initialState = {};

const optionsReducer = (state: any = initialState, { type, payload }: any) => {
  switch (type) {
    case ActionType.SET_OPTIONS:
      return { ...state, options: payload };
    default:
      return state;
  }
};

export default optionsReducer;
