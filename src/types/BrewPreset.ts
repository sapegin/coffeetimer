export interface BrewPreset {
	waterFrom: number;
	waterTo: number;
	waterDefault: number;
	brew: (options: {
		waterAmout: number;
	}) => { timer: number; coffeeAmount: number; steps: string[] };
}
