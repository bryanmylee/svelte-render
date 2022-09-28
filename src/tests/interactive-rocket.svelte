<script lang="ts">
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher<{
		launch: {message: string};
	}>();
</script>

<button on:click>👽</button>
<button on:click={() => dispatch('launch', {message: 'takeoff!'})}>🚀</button>
