<script lang="ts">
	import type {ComponentEvents} from 'svelte';
	import {createRender, Render} from '$lib/index.js';
	import Rocket from '../tests/rocket.svelte';
	import MultipleRockets from '../tests/multiple-rockets.svelte';
	import InteractiveRocket from '../tests/interactive-rocket.svelte';

	const rocket = createRender(Rocket);
	const multipleRockets = createRender(MultipleRockets, {times: 3});
	const interactiveRocket = createRender(InteractiveRocket)
		.on('click', (ev) => console.log(ev))
		.on('launch', (ev) => console.log(ev));
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>
	<Render of={rocket} />
</div>

<div>
	<Render of={multipleRockets} />
</div>

<div>
	<Render of={interactiveRocket} />
</div>
