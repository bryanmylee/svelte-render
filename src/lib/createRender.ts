import type {ComponentEvents, ComponentProps, SvelteComponent} from 'svelte';
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

	eventHandlers: [keyof ComponentEvents<TComponent>, (ev: Event) => void][] = [];
	on<TEventType extends keyof ComponentEvents<TComponent>>(
		type: TEventType,
		handler: (ev: ComponentEvents<TComponent>[TEventType]) => void,
	): this {
		this.eventHandlers.push([type, handler]);
		return this;
	}

	children: RenderConfig[] = [];
	slot(...children: RenderConfig[]) {
		this.children = children;
		return this;
	}
}

// Allow omission of the `props` argument if the component accepts no props.
export function createRender<TComponent extends SvelteComponent<Record<string, never>>>(
	component: Constructor<TComponent>,
): ComponentRenderConfig<TComponent>;

export function createRender<TComponent extends SvelteComponent>(
	component: Constructor<TComponent>,
	props: ComponentProps<TComponent> | Readable<ComponentProps<TComponent>>,
): ComponentRenderConfig<TComponent>;

export function createRender<TComponent extends SvelteComponent>(
	component: Constructor<TComponent>,
	props?: ComponentProps<TComponent> | Readable<ComponentProps<TComponent>>,
): ComponentRenderConfig<TComponent> {
	return new ComponentRenderConfig(component, props);
}
