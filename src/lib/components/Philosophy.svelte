<script>
    import SvelteMarkdown from 'svelte-markdown';
    import { markdownOptions } from '$lib/utils';

    export let philosophy;
</script>

<div class="prose prose-sm lg:prose-md 2xl:prose-xl my-36 px-4">
  <SvelteMarkdown source={philosophy.Philosophie} options={markdownOptions} />
  {#each philosophy.Biographies as biographie, index (biographie.id)}
    <div class="sm:my-24 flex flex-col sm:flex-row sm:space-between sm:relative">
      <div class="self-center w-1/2 sm:w-1/3 sm:sticky sm:top-0 sm:self-start">
        <img src={biographie.Portrait.data.attributes.url} alt={biographie.Portrait.data.attributes.alternativeText} />
      </div>
      <div class="sm:w-2/3 sm:pl-6 inline">
        <h2>{biographie.Nom}</h2>
        <p class="font-bold">{biographie.Position}</p>
        <SvelteMarkdown source={biographie.Description} options={markdownOptions} />
      </div>
    </div>
  {/each}
</div>
