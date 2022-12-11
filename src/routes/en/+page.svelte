<script>
	import { title } from '$lib/utils';
    import Home from '$lib/components/Home.svelte';

	export let data;
	let { projects } = data;

	title.set('KaPt');
</script>

<Home {projects} />
