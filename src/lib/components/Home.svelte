<script>
    import { onMount } from 'svelte';
    import i18n from '$lib/i18n';
    import { sluggify } from '$lib/utils';
    import Image from '$lib/components/Image.svelte';

	export let home;
	export let lang;

    const projects = home.Projets.data;
    let currentProjectIndex = 0;
    
    // shuffle through projects every 8 seconds
    onMount(() => {
        const interval = setInterval(() => {
            currentProjectIndex = (currentProjectIndex + 1) % projects.length;
        }, 8000);
        
        return () => {
			clearInterval(interval);
		};
    });
</script>

<div class="w-full overflow-hidden landing-image relative">
    <a href="{i18n.getLocalizedSlug('projects', lang)}/{sluggify(projects[currentProjectIndex].attributes.Nom)}">
        {#each projects as project, i}
            <Image
                img={project.attributes.Images.data[0].attributes}
                sizes="150wv"
                src="xlarge"
                lazy={i > 0}
                classString="absolute object-cover saturate-0 {i === currentProjectIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}"
            />
        {/each}
    </a>
</div>

<style>
.landing-image {
    height: calc(100vh - 14rem);
}
</style>
