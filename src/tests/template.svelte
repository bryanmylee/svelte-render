<script lang="ts">
	import {Render, type RenderConfig} from '$lib';

	type TComponent = $$Generic<SvelteComponent>;

	export let config: RenderConfig<TComponent>;
</script>

<div data-testid="template">
	<Render of={config} />
</div>
