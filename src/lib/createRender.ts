import type {ComponentProps, SvelteComponent, SvelteComponentTyped} from 'svelte';
import type {Readable} from 'svelte/store';

export type RenderConfig<TComponent extends SvelteComponent = SvelteComponent> =
	| ComponentRenderConfig<TComponent>
	| string
	| number
	| Readable<string | number>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<TInstance> = new (...args: any[]) => TInstance;

export class ComponentRenderConfig<TComponent extends SvelteComponent = SvelteComponent> {
	constructor(
		public component: Constructor<TComponent>,
		public props?: ComponentProps<TComponent> | Readable<ComponentProps<TComponent>>,
	) {}
}

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
	return new ComponentRenderConfig(component, props);
}
