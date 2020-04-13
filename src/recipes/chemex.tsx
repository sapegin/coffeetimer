import { BrewRecipe } from '../types/BrewRecipe';

const round = (value: number) => Math.round(value / 10) * 10;
const ml = (value: number) => `${round(value)} ml`;

export const recipe: BrewRecipe = {
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
				[`Pour ${ml(bloom)} of water and start the timer`, ml(bloom)],
				[`Pour ${ml(step)} of water`, ml(bloom + step)],
				`Stir the coffee with a spoon`,
				[`Pour ${ml(step)} more`, ml(bloom + step * 2)],
				[`Pour ${ml(step)} more`, ml(bloom + step * 3)],
				[`Pour the rest of the water`, ml(waterAmout)],
				`Shake the jug`,
				[`Enjoy your coffee!`, `☕️`],
			],
		};
	},
};
