import type {ComponentProps, SvelteComponent, SvelteComponentTyped} from 'svelte';
import type {Readable} from 'svelte/store';
import type {Constructor, RenderConfig} from './types';

// Allow omission of the `props` argument if the component accepts no props.
export function createRender<TComponent extends SvelteComponentTyped<Record<string, never>>>(
	component: Constructor<TComponent>,
): RenderConfig<TComponent>;

export function createRender<TComponent extends SvelteComponent>(
	component: Constructor<TComponent>,
	props: ComponentProps<TComponent> | Readable<ComponentProps<TComponent>>,
): RenderConfig<TComponent>;

export function createRender<TComponent extends SvelteComponent>(
	component: Constructor<TComponent>,
	props?: ComponentProps<TComponent> | Readable<ComponentProps<TComponent>>,
): RenderConfig<TComponent> {
	return {
		component,
		props,
	};
}
