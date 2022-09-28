<script lang="ts">
	import {Render, type RenderConfig} from '$lib';

	export let config: RenderConfig<any, any>;
</script>

<div data-testid="template">
	<Render of={config} />
</div>
