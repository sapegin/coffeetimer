import { useStorageState } from 'react-storage-hooks';

const dummyStorage = {
	getItem: () => null,
	setItem: () => {},
	removeItem: () => {},
};

const getStorage = () => {
	return typeof window === 'undefined' ? dummyStorage : window.localStorage;
};

export function useSetting<T>(name: string, defaultValue: T) {
	return useStorageState(getStorage(), `CoffeeTimer-${name}`, defaultValue);
}
