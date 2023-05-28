<script>
	import { page } from '$app/stores';
	import { desluggify, title } from '$lib/utils';
	import SingleNews from '$lib/components/SingleNews.svelte';

	export let data;
	let { singleNews } = data;

	title.set(desluggify($page.params.newsSlug));
</script>

<SingleNews {singleNews} lang="fr" />
