<script>
    import { title } from '$lib/utils';
    import SingleNews from '$lib/components/SingleNews.svelte';

    export let data;
    let { singleNews } = data;

    title.set(singleNews.Nom);
</script>

<SingleNews {singleNews} lang="fr" />
