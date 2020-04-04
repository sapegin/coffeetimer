import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useMachine } from '@xstate/react';
import { App } from '../components/App';
import { timerMachine } from '../machines/timerMachine';
import { preset } from '../presets/default';

const IndexPage: NextPage = () => {
	const { waterFrom, waterTo, waterDefault, brew } = preset;
	const [
		{
			context: { waterAmout, elapsed },
			value,
		},
		send,
	] = useMachine(timerMachine);
	const { timer, steps } = brew({ waterAmout });

	useEffect(() => {
		send('UPDATE_WATER_AMOUNT', { value: waterDefault });
	}, [waterDefault]);

	useEffect(() => {
		send('UPDATE_DURATION', { value: timer });
	}, [timer]);

	return (
		<App>
			<div>
				<label>
					<span>Water amount:</span>
					<input
						type="range"
						min={waterFrom}
						max={waterTo}
						value={waterAmout}
						step={50}
						disabled={value === 'running'}
						onChange={event => {
							send('UPDATE_WATER_AMOUNT', {
								value: Number(event.target.value),
							});
						}}
					/>
					({waterAmout} ml)
				</label>
			</div>
			<button onClick={() => send('TOGGLE')}>
				{value === 'paused' ? 'Start' : 'Stop'}
			</button>
			<div>
				<progress max={timer} value={elapsed} />
			</div>
			<ol>
				{steps.map((step, index) => (
					<li key={index}>{step}</li>
				))}
			</ol>
		</App>
	);
};

export default IndexPage;
