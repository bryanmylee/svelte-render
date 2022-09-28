import type {SvelteComponent} from 'svelte';
import type {Readable} from 'svelte/store';
import type {SvelteComponentWithProps} from './types';

export function createRender<TProps extends object, TComponent extends SvelteComponent>(
	component: SvelteComponentWithProps<TProps, TComponent>,
	props?: TProps | Readable<TProps>,
) {
	return {
		component,
		props,
	};
}
