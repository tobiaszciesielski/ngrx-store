import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './dashboard.actions';

export const initialState = 0;

export const reducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function dashboardReducer(state: any, action: any) {
  return reducer(state, action);
}


