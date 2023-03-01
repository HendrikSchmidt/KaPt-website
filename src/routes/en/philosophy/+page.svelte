<script>
  import { title } from '$lib/utils';
  import Philosophy from '$lib/components/Philosophy.svelte';

  export let data;
  let { philosophy } = data;


  title.set('Philosophy');
</script>

<Philosophy {philosophy} lang='en' />
