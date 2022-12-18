<script>
  import SvelteMarkdown from 'svelte-markdown';
  import { markdownOptions } from '$lib/utils';

  export let contact;
</script>

<div class="prose prose-sm 2xl:prose-xl flex flex-col justify-center min-h-screen">
  <div>
    <SvelteMarkdown source={contact.Contact} options={markdownOptions} />
  </div>
</div>
