import { BrewPreset } from '../types/BrewPreset';

const round = (value: number) => Math.round(value / 10) * 10;

export const preset: BrewPreset = {
	waterFrom: 100,
	waterTo: 600,
	waterDefault: 500,
	brew: ({ waterAmout }) => {
		const timer = 45;
		const ratio = 18;
		const coffeeAmount = Math.round(waterAmout / ratio);
		const bloom = round(coffeeAmount * 3);
		const step = (waterAmout - bloom) / 4;
		return {
			timer,
			coffeeAmount,
			steps: [
				`Pour ${round(bloom)} ml of water and wait ${timer} seconds`,
				`Pour ${round(step)} ml of water and stir the coffee with a spoon`,
				`Pour ${round(step)} ml more`,
				`Pour ${round(step)} ml more`,
				`Pour the rest of the water`,
				`Shake the jug`,
				`Enjoy your coffee! ☕️`,
			],
		};
	},
};
