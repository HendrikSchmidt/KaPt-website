<script>
  import SvelteMarkdown from 'svelte-markdown';
  import { variables } from '$lib/variables';
  import { title } from '$lib/utils';

  export let data;
  let about = data.about;

  console.log(about);

  title.set('about');
</script>

<h1>{about.Title}</h1>
<SvelteMarkdown source={about.APropos} options={variables.markdownOptions} />
{#each about.Biographie as biographie, index (biographie.id)}
  <div class="my-24 flex flex-row justify-around">
    <div class="w-3/12 pt-6">
      <img src={biographie.Portrait.data.attributes.url} alt={biographie.Portrait.data.attributes.url} />
    </div>
    <div class="w-6/12">
      <h2>{biographie.Nom}</h2>
      <p class="font-semibold">{biographie.Position}</p>
      <SvelteMarkdown source={biographie.Description} options={variables.markdownOptions} />
    </div>
  </div>
{/each}
