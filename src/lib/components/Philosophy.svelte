<script>
    import SvelteMarkdown from 'svelte-markdown';
    import { markdownOptions } from '$lib/utils';

    export let philosophy;
</script>

<div class="prose prose-sm my-36">
  <SvelteMarkdown source={philosophy.Philosophie} options={markdownOptions} />
  {#each philosophy.Biographies as biographie, index (biographie.id)}
    <div class="my-24 flex space-between relative">
      <div class="w-4/12 sticky top-0 self-start">
        <img src={biographie.Portrait.data.attributes.url} alt={biographie.Portrait.data.attributes.alternativeText} />
      </div>
      <div class="w-8/12 pl-6 inline">
        <h2>{biographie.Nom}</h2>
        <p class="font-bold">{biographie.Position}</p>
        <SvelteMarkdown source={biographie.Description} options={markdownOptions} />
      </div>
    </div>
  {/each}
</div>
