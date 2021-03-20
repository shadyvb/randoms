import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '..';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const slice = createSlice( {
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: ( state, action: PayloadAction<number> ) => {
      state.value += action.payload;
    },
  },
} );

export const incrementAsync = ( amount: number ): AppThunk => dispatch => {
  setTimeout( () => {
    dispatch( slice.actions.incrementByAmount( amount ) );
  }, 1000 );
};

export const selectCount = ( state: RootState ) => state.counter.value;

export const actions = {
  ...slice.actions,
  incrementAsync,
}

export const selectors = {
  selectCount,
}

export default slice.reducer;
