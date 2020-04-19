export interface BrewRecipe {
	waterFrom: number;
	waterTo: number;
	waterDefault: number;
	ratioDefault: number;
	brew: (options: {
		waterAmount: number;
		ratio: number;
	}) => {
		timer: number;
		coffeeAmount: number;
		steps: (string | [string, string])[];
	};
}
