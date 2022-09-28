<script lang="ts">
	import type {ComponentRenderConfig, RenderConfig} from '$lib/types';
	import {isReadable, Undefined} from './store';
	import {Subscribe} from 'svelte-subscribe';
	import type {SvelteComponent} from 'svelte';

	type TProps = $$Generic<object>;
	type TComponent = $$Generic<SvelteComponent>;

	let config: RenderConfig<TProps, TComponent>;
	export {config as of};

	const readableConfig = isReadable(config) ? config : Undefined;
	const noTypeConfig = config as ComponentRenderConfig<any>;
</script>

{#if isReadable(config)}
	<!-- Auto-subscription must be on a non-nullable `Readable`. -->
	{$readableConfig}
{:else if typeof config === 'string' || typeof config === 'number'}
	{config}
{:else if isReadable(config.props)}
	<Subscribe props={config.props} let:props>
		<svelte:component this={config.component} {...props ?? {}} />
	</Subscribe>
{:else}
	<svelte:component this={noTypeConfig.component} {...noTypeConfig.props ?? {}} />
{/if}
