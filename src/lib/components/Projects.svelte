<script>
  import SvelteMarkdown from 'svelte-markdown';
  import { variables } from '$lib/variables';

  export let projects;

  projects = projects.map(project => {
    let shortDescription = project.attributes.Description.slice(0, 500);
    shortDescription = `${shortDescription.slice(0, shortDescription.lastIndexOf(' '))} ...`;
    return {
      ...project,
      attributes: {
        ...project.attributes,
        shortDescription
      }
    };
  });
  
  const isActive = projects.map(() => false);

  const makeActive = (index) => {
    isActive[index] = !isActive[index];
  }

</script>

{#each projects as project, index (project.id)}
  <div class="py-12 flex flex-row justify-around border-b-2 border-black cursor-pointer" on:click={() => makeActive(index)}>
    <div class="w-6/12 pr-6">
      {#if isActive[index]}
        {#each project.attributes.Images.data as img}
          <img src={img.attributes.url} alt={img.attributes.alternativeText} />
        {/each}
      {:else}
        <img src={project.attributes.Images.data[0].attributes.url} alt={project.attributes.Images.data[0].attributes.alternativeText} />
      {/if}
    </div>
    <div class="w-6/12 prose-sm">
      <h2>{project.attributes.Nom}</h2>
      <p class="font-semibold">{project.attributes.Localisation}</p>
      <p class="font-semibold">{project.attributes.Surface} m<sup>2</sup></p>
      {#if isActive[index]}
        <SvelteMarkdown source={project.attributes.Description} options={variables.markdownOptions} />
      {/if}
    </div>
  </div>
{/each}
