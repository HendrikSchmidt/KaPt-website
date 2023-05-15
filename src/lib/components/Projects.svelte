<script>
  import { onMount } from 'svelte';
  import i18n from '$lib/i18n';
  import { sluggify } from '$lib/utils';
  import Image from '$lib/components/Image.svelte';

  export let projects;
  export let lang;

  projects = projects.map((project) => ({
    ...project,
    imagesToShow: project.attributes.MontrePlansDansProjets ? project.attributes.Images.data.concat(project.attributes.Plans.data) : project.attributes.Images.data,
    idxToShow: 0,
  }));

  // introduce delay between image changes
  const changeImagesGradually = () => {
    for (let i = 0; i < projects.length; i++) {
      setTimeout(() => {
        projects[i] = {
          ...projects[i],
          idxToShow: (projects[i].idxToShow + 1) % projects[i].imagesToShow.length,
        };
      }, i * 1000);
    }
  };

  // shuffle through image every 5 seconds
	onMount(() => {
		const interval = setInterval(changeImagesGradually, 5000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="w-full flex flex-row flex-wrap">
  {#each projects as project (project.id)}
  <div class="w-full lg:w-1/2 flex-none lg:px-5">
    <a class="w-full aspect-square md:aspect-[3/2] lg:aspect-square 2xl:aspect-[3/2] cursor-pointer flex flex-col border-t-2 border-zinc-900 py-5 mb-5" href="{i18n.getLocalizedSlug('projects', lang)}/{sluggify(project.attributes.Nom)}">
      
      <div class="prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl flex-none">
        <h1 class="pb-5">{project.attributes.Nom}</h1>
      </div>
      
      <div class="w-full overflow-hidden landing-image relative flex-auto">
        {#each project.imagesToShow as img, idx}
        <Image
            img={img.attributes}
            sizes="150wv"
            src="xlarge"
            lazy={idx > 0}
            pictureRelative={false}
            classString="absolute object-contain saturate-0 hover:saturate-100 {idx === project.idxToShow ? 'opacity-100 z-10' : 'opacity-0 z-0'}"
        />
        {/each}
      </div>
    </a>
  </div>
  {/each}
</div>
