<script>
    import { title } from '$lib/utils';
    import Home from '$lib/components/Home.svelte';

    export let data;
    let { home } = data;

    title.set('Home');
</script>

<Home {home} lang="en" />
