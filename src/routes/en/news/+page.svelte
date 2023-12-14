<script>
    import { title } from '$lib/utils';
    import News from '$lib/components/News.svelte';

    export let data;
    let news = data.news;

    title.set('News');
</script>

<News {news} lang="en" />
