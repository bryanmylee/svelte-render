import type {SvelteComponent} from 'svelte';
import type {Readable} from 'svelte/store';
import type {ComponentRenderConfig, EmptyProps, SvelteComponentWithProps} from './types';

export function createRender<TProps extends EmptyProps, TComponent extends SvelteComponent>(
	component: SvelteComponentWithProps<TProps, TComponent>,
): ComponentRenderConfig<TProps, TComponent>;
export function createRender<TProps extends object, TComponent extends SvelteComponent>(
	component: SvelteComponentWithProps<TProps, TComponent>,
	props: TProps | Readable<TProps>,
): ComponentRenderConfig<TProps, TComponent>;
export function createRender<TProps extends object, TComponent extends SvelteComponent>(
	component: SvelteComponentWithProps<TProps, TComponent>,
	props?: TProps | Readable<TProps>,
) {
	return {
		component,
		props,
	};
}
