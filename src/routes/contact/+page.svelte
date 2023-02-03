<script>
  import { title } from '$lib/utils';
  import Contact from '$lib/components/Contact.svelte';

  export let data;
  let { contact } = data;

  title.set('Contact');
</script>

<Contact {contact} lang='fr' />
