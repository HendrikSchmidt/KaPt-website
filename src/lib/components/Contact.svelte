<script>
  import SvelteMarkdown from 'svelte-markdown';
  import { markdownOptions } from '$lib/utils';
  import i18n from '$lib/i18n';

  export let contact;
  export let lang;
</script>

<div class="prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl w-full">
  
  <h1>{i18n.getLocalizedString('contact', lang)}</h1>
  <div class="flex w-full">
    <div class="text-zinc-400 lowercase w-1/2">
      <p>{i18n.getLocalizedString('mail', lang)}</p>
      <p>instagram</p>
      <p>{i18n.getLocalizedString('phone', lang)}</p>
      <p>{i18n.getLocalizedString('address', lang)}</p>
    </div>
    <div>
      <p><a href="mailto:{contact.Mail}">{contact.Mail}</a></p>
      <p><a href="https://www.instagram.com/{contact.Instagram}/">@{contact.Instagram}</a></p>
      <p>{contact.Phone}</p>
      <SvelteMarkdown source={contact.Adresse} options={markdownOptions} />
    </div>
  </div>
</div>
