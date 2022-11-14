<script>
	// import Header from './Header.svelte';
	// import './styles.scss';
	// import { title } from '$lib/utils';

	export let data;
	let {categoryNames} = data;
	
</script>

<svelte:head>
	<!-- <title>{$title}</title> -->
</svelte:head>

<div class="app">
	<!-- <Header {categoryNames} /> -->

	<main class="container pb-2">
		<slot />
	</main>
</div>
