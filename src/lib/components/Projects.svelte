<script>
  import SvelteMarkdown from 'svelte-markdown';
  import { markdownOptions } from '$lib/utils';

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

<div class="my-36">
  {#each projects as project, index (project.id)}
    <div class="pb-24 flex flex-col sm:flex-row justify-around cursor-pointer" on:click={() => makeActive(index)} on:keypress={() => makeActive(index)} >
      
      <div class="p-2 pr-4 sm:w-1/2 xl:w-5/12 prose prose-sm lg:prose-base">
        <h2>{project.attributes.Nom}</h2>
        <p class="font-semibold">{project.attributes.Programme}</p>
        <p class="font-semibold">{project.attributes.Localisation}</p>
        <p class="font-semibold">{project.attributes.Surface} m<sup>2</sup></p>
        {#if isActive[index]}
          <SvelteMarkdown source={project.attributes.Description} options={markdownOptions} />
        {/if}
      </div>
      
      <div class="sm:w-1/2 xl:w-7/12 sm:pr-6">
        {#if isActive[index]}
          {#each project.attributes.Images.data as img}
            <img class="pb-4" src={img.attributes.url} alt={img.attributes.alternativeText} />
          {/each}
        {:else}
          <img class="project-thumb object-cover" src={project.attributes.Images.data[0].attributes.url} alt={project.attributes.Images.data[0].attributes.alternativeText} />
        {/if}
      </div>
      
    </div>
  {/each}
</div>

<style>
.project-thumb {
  aspect-ratio: 3/2;
}
</style>