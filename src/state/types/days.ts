import { ActionType } from './actionTypes';

export interface GetData {
  type: ActionType.GET_DATA;
  payload: Data;
}

export interface Data {
  days?: Day[];
}

export interface Day {
  meals: Meal[];
  training: boolean;
  carb: string;
}

export interface Meal {
  name: string;
  eaten: boolean;
}

export type DaysAction = GetData;
