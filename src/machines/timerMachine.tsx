import { createMachine, assign } from 'xstate';

const INTERVAL = 1;
const MS_IN_SECS = 1000;

interface TimerContext {
	waterAmount: number;
	elapsed: number;
	duration: number;
}

type TimerEvent =
	| {
			type: 'TICK';
	  }
	| {
			type: 'UPDATE_DURATION';
			value: number;
	  }
	| {
			type: 'UPDATE_WATER_AMOUNT';
			value: number;
	  }
	| {
			type: 'TOGGLE';
	  };

export const timerMachine = createMachine<TimerContext, TimerEvent>({
	initial: 'paused',
	context: {
		waterAmount: 0,
		elapsed: 0,
		duration: 0,
	},
	states: {
		running: {
			invoke: {
				src: () => cb => {
					const interval = setInterval(() => {
						cb('TICK');
					}, INTERVAL * MS_IN_SECS);
					return () => {
						clearInterval(interval);
					};
				},
			},
			on: {
				'': {
					target: 'paused',
					cond: context => context.elapsed >= context.duration,
				},
				TOGGLE: {
					target: 'paused',
					actions: assign<TimerContext>({
						elapsed: 0,
					}),
				},
				TICK: {
					actions: assign({
						elapsed: context => context.elapsed + INTERVAL,
					}),
				},
			},
		},
		paused: {
			on: {
				UPDATE_DURATION: {
					actions: assign({
						duration: (_, event) => event.value,
					}),
				},
				UPDATE_WATER_AMOUNT: {
					actions: assign({
						waterAmount: (_, event) => event.value,
					}),
				},
				TOGGLE: {
					target: 'running',
					actions: assign<TimerContext>({
						elapsed: 0,
					}),
				},
			},
		},
	},
});
