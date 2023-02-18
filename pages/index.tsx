import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hook';

import { decrement, increment, incrementByAmount } from '@/store/counter';
import { getPokemons } from '@/store/pokemon';

const HomePage = () => {
	const { counter } = useAppSelector((state) => state.counter);
	const { page, pokemons, isLoading } = useAppSelector((state) => state.pokemons);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getPokemons());
	}, [dispatch]);

	return (
		<div>
			<h1>Redux-ToolKit</h1>

			<h2>Contador: {counter}</h2>

			<button onClick={() => dispatch(decrement())}>Decrementa</button>
			<button onClick={() => dispatch(increment())}>Incrementar</button>
			<button onClick={() => dispatch(incrementByAmount(2))}>
				Incrementar + 2
			</button>

			<hr />

			<h2>Pokemon</h2>

			<p>Página: {page}</p>
			<span>Loading: {isLoading ? 'True' : 'False'} </span>

			<ul>
				{pokemons.map(({ name }) => (
					<li key={name}>{name}</li>
				))}
			</ul>

			<button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
				Next
			</button>
		</div>
	);
};

export default HomePage;
