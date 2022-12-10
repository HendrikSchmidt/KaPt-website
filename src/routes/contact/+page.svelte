<script>
  import SvelteMarkdown from 'svelte-markdown';
  import { variables } from '$lib/variables';
  import { title } from '$lib/utils';

  export let data;
  let contact = data.contact;

  title.set('Contact');
</script>

<div class="prose prose-sm">
  <SvelteMarkdown source={contact.Contact} options={variables.markdownOptions} />
</div>
