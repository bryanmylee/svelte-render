import type {SvelteComponent, ComponentProps} from 'svelte';
import type {Readable} from 'svelte/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<TInstance> = new (...args: any[]) => TInstance;

export type ComponentRenderConfig<TComponent extends SvelteComponent = SvelteComponent> = {
	component: Constructor<TComponent>;
	props?: ComponentProps<TComponent> | Readable<ComponentProps<TComponent>>;
};

export type RenderConfig<TComponent extends SvelteComponent = SvelteComponent> =
	| ComponentRenderConfig<TComponent>
	| string
	| number
	| Readable<string | number>;
