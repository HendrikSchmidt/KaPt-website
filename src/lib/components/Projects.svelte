<script>
  import i18n from '$lib/i18n';
  import { sluggify } from '$lib/utils';
  import Image from '$lib/components/Image.svelte';

  export let projects;
  export let lang;

  let sizes = "600px";
</script>

<div>
  {#each projects as project, index (project.id)}
    <a class="pb-20 cursor-pointer" href="{i18n.getLocalizedSlug('projects', lang)}/{sluggify(project.attributes.Nom)}">
      
      <div class="py-3 mb-5 prose sm:w-2/3 lg:w-1/2 border-b-2 border-zinc-900">
        <h2 class="font-normal">{project.attributes.Nom}</h2>
      </div>
      
      <div class="flex w-full overflow-scroll">
          {#each project.attributes.Images.data as img, imgIndex}
          <div class="flex-none aspect-square w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 mr-8 mb-8 overflow-hidden">
            <Image
              img={img.attributes}
              sizes={sizes}
              src="small"
              lazy={index > 2 || imgIndex > 6}
              classString="object-cover saturate-0 hover:saturate-100"
            />
          </div>
          {/each}
          {#if project.attributes.MontrePlansDansProjets}
            {#each project.attributes.Plans.data as plan, planIndex}
            <div class="flex-none aspect-square w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 mr-8 mb-8 overflow-hidden">
              <Image
                img={plan.attributes}
                sizes={sizes}
                src="small"
                lazy={index > 2 || project.attributes.Images.data.length + planIndex > 6 }
                classString="object-cover saturate-0 hover:saturate-100"
              />
            </div>
            {/each}
          {/if}
      </div>
    </a>
  {/each}
</div>

<style>
</style>