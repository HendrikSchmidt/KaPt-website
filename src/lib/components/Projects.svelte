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

</script>

<div>
  {#each projects as project, index (project.id)}
    <div class="pb-20 cursor-pointer">
      
      <div class="py-3 mb-5 prose sm:w-2/3 lg:w-1/2 border-b-2 border-zinc-900">
        <h2 class="font-normal">{project.attributes.Nom}</h2>
        <!-- <p class="font-semibold">{project.attributes.Localisation}</p>
        <p class="font-semibold">{project.attributes.Surface} m<sup>2</sup></p> -->
        <!-- <SvelteMarkdown source={project.attributes.Description} options={markdownOptions} /> -->
      </div>
      
      <div class="flex w-full overflow-scroll">
          {#each project.attributes.Images.data as img}
          <div class="flex-none w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 mr-8 mb-8 overflow-hidden">
            <img class="w-full h-auto aspect-square object-cover object-center saturate-0 hover:saturate-100 transition duration-500 transform hover:scale-110" src={img.attributes.url} alt={img.attributes.alternativeText} />
          </div>
          {/each}
          <!-- <img class="project-thumb object-cover" src={project.attributes.Images.data[0].attributes.url} alt={project.attributes.Images.data[0].attributes.alternativeText} /> -->
      </div>
    </div>
  {/each}
</div>

<style>
</style>