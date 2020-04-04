const round = (value: number) => Math.round(value / 10) * 10;

export const preset = {
	waterFrom: 100,
	waterTo: 600,
	waterDefault: 500,
	brew: ({ waterAmout }) => {
		const timer = 30;
		const ratio = 18;
		const firstStep = waterAmout / 5;
		const step = (waterAmout - firstStep) / 3;
		return {
			timer,
			steps: [
				`Grind ${Math.round(waterAmout / ratio)} g of coffee`,
				`Pour ${round(firstStep)} ml of water and wait ${timer} seconds`,
				`Pour ${round(step)} ml of water and stir the coffee with a spoon`,
				`Pour ${round(step)} ml more`,
				`Pour the rest of the water`,
				`Shake the jug`,
				`Enjoy your coffee!`,
			],
		};
	},
};
