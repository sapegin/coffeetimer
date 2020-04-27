import { BrewRecipe } from '../types/BrewRecipe';

// Based on https://www.youtube.com/watch?v=ikt-X5x7yoc and https://www.youtube.com/watch?v=AI4ynXzkSQo

// Non-breaking space
const nbsp = ' ';

const round = (value: number) => Math.ceil(value / 10) * 10;

const ml = (value: number) => `${round(value)}${nbsp}ml`;

export const recipe: BrewRecipe = {
	waterFrom: 100,
	waterTo: 600,
	waterDefault: 500,
	ratioDefault: 15,
	brew: ({ waterAmount, ratio }) => {
		const timer = 45;
		const coffeeAmount = Math.round(waterAmount / ratio);
		const bloom = round(coffeeAmount * 2);
		const steps = waterAmount > 350 ? 3 : 2;
		const step = (waterAmount - bloom) / steps;
		return {
			timer,
			coffeeAmount,
			steps: [
				[`Pour ${ml(bloom)} of water, start timer`, ml(bloom)],
				[`Pour ${ml(step)} of water, stir coffee`, ml(bloom + step)],
				...(Array(steps - 2)
					.fill(null)
					.map((_, index) => [
						`Pour ${ml(step)} more`,
						ml(bloom + step * (index + 2)),
					]) as [string, string][]),
				[`Pour the rest of the water`, ml(waterAmount)],
				`Shake the jug`,
				[`Enjoy your coffee!`, `☕️`],
			],
		};
	},
};
