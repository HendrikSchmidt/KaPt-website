<script>
  import { title } from '$lib/utils';
  import Projects from '$lib/components/Projects.svelte';

  export let data;
  let projects = data.projects;

  title.set('Projects');
</script>

<Projects {projects} lang='en' />
