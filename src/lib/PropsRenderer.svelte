<script lang="ts">
	import type {ComponentProps, SvelteComponent} from 'svelte';
	import type {ComponentRenderConfig} from './createRender';

	type TComponent = $$Generic<SvelteComponent>;

	export let instance: TComponent | undefined = undefined;
	export let config: Omit<ComponentRenderConfig<TComponent>, 'props'>;
	export let props: ComponentProps<TComponent> | undefined = undefined;
</script>

<svelte:component this={config.component} bind:this={instance} {...props ?? {}} />
