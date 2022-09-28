import type {SvelteComponent} from 'svelte';
import type {Readable} from 'svelte/store';

export type EmptyProps = Record<string, never>;

export type SvelteComponentWithProps<
	TProps extends object = EmptyProps,
	TComponent extends SvelteComponent = SvelteComponent,
> = AConstructorTypeOf<TComponent, [Svelte2TsxComponentConstructorParameters<TProps>]>;

export type ComponentRenderConfig<
	TProps extends object = EmptyProps,
	TComponent extends SvelteComponent = SvelteComponent,
> = {
	component: SvelteComponentWithProps<TProps, TComponent>;
	props?: TProps | Readable<TProps>;
};

export type RenderConfig<
	TProps extends object = EmptyProps,
	TComponent extends SvelteComponent = SvelteComponent,
> = ComponentRenderConfig<TProps, TComponent> | string | number | Readable<string | number>;
