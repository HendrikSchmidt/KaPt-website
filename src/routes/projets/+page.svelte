<script>
  import SvelteMarkdown from 'svelte-markdown';
  import { variables } from '$lib/variables';
  import { title } from '$lib/utils';

  export let data;
  let projects = data.projects;

  title.set('Projets');

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

{#each projects as project, index (project.id)}
  <div class="my-24 flex flex-row justify-around">
    <div class="w-3/12 pt-6">
      <!-- <img src={project.attributes.Portrait.data.attributes.url} alt={biographie.Portrait.data.attributes.url} /> -->
    </div>
    <div class="w-6/12 prose-sm">
      <h2>{project.attributes.Nom}</h2>
      <p class="font-semibold">{project.attributes.Localisation}</p>
      <p class="font-semibold">{project.attributes.Surface} m<sup>2</sup></p>
      <SvelteMarkdown source={project.attributes.shortDescription} options={variables.markdownOptions} />
    </div>
  </div>
{/each}
