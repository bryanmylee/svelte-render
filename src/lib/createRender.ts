import type {ComponentProps, SvelteComponent} from 'svelte';
import type {Readable} from 'svelte/store';
import type {Constructor, RenderConfig} from './types';

export function createRender<TComponent extends SvelteComponent>(
	component: Constructor<TComponent>,
	props?: ComponentProps<TComponent> | Readable<ComponentProps<TComponent>>,
): RenderConfig<TComponent> {
	return {
		component,
		props,
	};
}
