<script>
  import SvelteMarkdown from 'svelte-markdown';
  import { variables } from '$lib/variables';

  export let contact;
</script>

<div class="prose prose-sm flex flex-col justify-center min-h-screen">
  <div>
    <SvelteMarkdown source={contact.Contact} options={variables.markdownOptions} />
  </div>
</div>
