import {readable, type Readable} from 'svelte/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isReadable = <T>(value: any): value is Readable<T> => {
	return value?.subscribe instanceof Function;
};

export const Undefined = readable(undefined);
