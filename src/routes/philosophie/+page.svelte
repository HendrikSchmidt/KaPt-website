<script>
  import { title } from '$lib/utils';
  import Philosophy from '$lib/components/Philosophy.svelte';

  export let data;
  let philosophy = data.philosophy;

  title.set('Philosophie');
</script>

<Philosophy {philosophy} lang='fr' />
