<script>
  import SvelteMarkdown from 'svelte-markdown';
  import { markdownOptions } from '$lib/utils';
  import i18n from '$lib/i18n';

  export let contact;
  export let lang;
</script>

<div class="prose w-full prose-sm lg:prose-base xl:prose-lg">
  
  <h1>{i18n.getLocalizedString('contact', lang)}</h1>
  <div class="flex w-full">
    <div class="text-zinc-400 lowercase w-1/2">
      <p>{i18n.getLocalizedString('mail', lang)}</p>
      <p>{i18n.getLocalizedString('phone', lang)}</p>
      <p>{i18n.getLocalizedString('address', lang)}</p>
    </div>
    <div>
      <p>{contact.Mail}</p>
      <p>{contact.Phone}</p>
      <p>{contact.Adresse}</p>
    </div>
  </div>
  <h2>{i18n.getLocalizedString('social', lang)}</h2>
  <div class="flex">
    <div class="text-zinc-400 lowercase w-1/2">
      <p>instagram</p>
    </div>
    <div>
      <SvelteMarkdown source={contact.Instagram} options={markdownOptions} />
    </div>
  </div>
</div>
