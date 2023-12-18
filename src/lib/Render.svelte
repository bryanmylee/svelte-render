<script lang="ts">
	import type {SvelteComponent} from 'svelte';
	import ComponentRenderer from './ComponentRenderer.svelte';
	import type {RenderConfig} from './createRender.js';
	import {isReadable, Undefined} from './store.js';

	type TComponent = $$Generic<SvelteComponent>;

	let config: RenderConfig<TComponent>;
	export {config as of};
	const readableConfig = isReadable(config) ? config : Undefined;
</script>

{#if isReadable(config)}
	<!-- Auto-subscription must be on a non-nullable `Readable`. -->
	{$readableConfig}
{:else if typeof config !== 'object'}
	{config}
{:else}
	<ComponentRenderer {config} />
{/if}
