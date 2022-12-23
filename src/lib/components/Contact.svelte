<script>
  import SvelteMarkdown from 'svelte-markdown';
  import { markdownOptions } from '$lib/utils';

  export let contact;
</script>

<div class="prose prose-sm lg:prose-base xl:prose-lg lg:w-1/2">
  <SvelteMarkdown source={contact.Contact} options={markdownOptions} />
</div>
