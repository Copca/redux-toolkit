import { useAppDispatch, useAppSelector } from '@/hooks/redux-hook';

import { decrement, increment, incrementByAmount } from '@/store/counter';

const HomePage = () => {
	const { counter } = useAppSelector((state) => state.counter);
	const dispatch = useAppDispatch();

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
		</div>
	);
};

export default HomePage;
