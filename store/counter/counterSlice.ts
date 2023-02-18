import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

// Define a type for the slice state
interface CounterState {
	counter: number;
	times: number;
}

// Define the initial state using that type
const initialState: CounterState = {
	counter: 10,
	times: 0
};

export const counterSlice = createSlice({
	name: 'counter',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		increment: (state) => {
			state.counter += 1;
		},
		decrement: (state) => {
			state.counter -= 1;
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.counter += action.payload;
		}
	}
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.counter;
