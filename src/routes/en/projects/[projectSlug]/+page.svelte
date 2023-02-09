<script>
  import { page } from "$app/stores";
  import { desluggify, title } from "$lib/utils";
  import SingleProject from '$lib/components/SingleProject.svelte';

  export let data;
  let { project } = data;

  title.set(desluggify($page.params.projectSlug));
</script>

<SingleProject {project} lang='en' />
