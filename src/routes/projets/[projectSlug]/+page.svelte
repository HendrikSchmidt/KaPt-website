<script>
    import { title } from '$lib/utils';
    import SingleProject from '$lib/components/SingleProject.svelte';

    export let data;
    let { project } = data;

    title.set(project.Nom);
</script>

<SingleProject {project} lang="fr" />
