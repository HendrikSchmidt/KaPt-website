<script>
    import SvelteMarkdown from 'svelte-markdown';
    import { markdownOptions } from '$lib/utils';

    export let philosophy;
</script>

<div>
  <div class="prose prose-sm lg:prose-base 2xl:prose-lg">
    <SvelteMarkdown source={philosophy.Philosophie} options={markdownOptions} />
  </div>
  {#each philosophy.Biographies as biographie, index (biographie.id)}
    <div class="my-24 sm:flex">
      <div class="max-sm:hidden w-60 flex-none pt-16 pb-8">
        <img src={biographie.Portrait.data.attributes.url} alt={biographie.Portrait.data.attributes.alternativeText} />
      </div>
      <div class="pt-16 sm:pl-6 inline prose prose-sm lg:prose-base 2xl:prose-lg">
        <h2>{biographie.Nom}</h2>
        <div class="sm:hidden">
          <img class="w-60" src={biographie.Portrait.data.attributes.url} alt={biographie.Portrait.data.attributes.alternativeText} />
        </div>
        <p class="font-bold">{biographie.Position}</p>
        <SvelteMarkdown source={biographie.Description} options={markdownOptions} />
      </div>
    </div>
  {/each}
</div>
