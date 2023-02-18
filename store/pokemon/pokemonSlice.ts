import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IPokemonState {
	page: number;
	pokemons: any[];
	isLoading: boolean;
}

const initialState: IPokemonState = {
	page: 0,
	pokemons: [],
	isLoading: false
};

export const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		startLoadingPokemons: (state) => {
			state.isLoading = true;
		},
		setPokemons: (state, action) => {
			console.log(action);
		}
		//restar: (state) => {
		//    state.counter -= 1;
		//},
		//sumarBy: (state, action: PayloadAction<number>) => {
		//    state.counter += action.payload;
		//}
	}
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
