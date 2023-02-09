<script>
    import SvelteMarkdown from "svelte-markdown";
    import { page } from "$app/stores";
    import { desluggify, title, projectSlugsToIds } from "$lib/utils";
    import Image from "$lib/components/Image.svelte";
    import i18n from "$lib/i18n";

    export let project;
    export let lang;
    $: photos = project.Images.data;
    $: plans = project.Plans.data;

    console.log(project.Images.data[1]);

    let showLightbox = false;
    const openLightbox = (url, text) => {
        showLightbox = true;
        const lightbox = document.getElementById('lightbox');
        const modalImg = lightbox.querySelector('img');
        modalImg.src = url;
        modalImg.alt = text;
    };
    const hideLightbox = () => {showLightbox = false;};
</script>

<div class="image-grid w-full grid grid-flow-dense grid-cols-6 gap-8">
    <div class="col-span-6 md:col-span-2">
        <div class="flex mb-2 justify-between md:justify-start">
            <span class="w-1/2 text-zinc-400 lowercase">{i18n.getLocalizedString('name', lang)}</span>
            <span>{project.Nom.toUpperCase()}</span>
        </div>
        <div class="flex mb-2 justify-between md:justify-start">
            <span class="w-1/2 text-zinc-400 lowercase">{i18n.getLocalizedString('location', lang)}</span>
            <span>{project.Localisation}</span>
        </div>
        <div class="flex mb-2 justify-between md:justify-start">
            <span class="w-1/2 text-zinc-400 lowercase">{i18n.getLocalizedString('program', lang)}</span>
            <span>{project.Programme}</span>
        </div>
        <div class="flex mb-2 justify-between md:justify-start">
            <span class="w-1/2 text-zinc-400 lowercase">{i18n.getLocalizedString('area', lang)}</span>
            <span>{project.Surface} m<sup>2</sup></span>
        </div>
    </div>
    <div class="row-start-2 col-span-6 md:col-start-3 md:col-span-4 text-justify overflow-scroll">
        {project.Description}
    </div>
    <div class="row-start-3 col-span-6 md:col-span-4">
        <Image
            img={plans[0].attributes}
            sizes="150wv"
            src="xlarge"
            classString="w-full h-full object-cover object-center"
            on:click={() => openLightbox(plans[0].attributes.formats.large.url, plans[0].attributes.alternativeText)}
        />
    </div>
    {#each photos as photo, i}
        <div class={`col-span-6 ${photo.attributes.width > photo.attributes.height ? 'md:col-span-4' : 'md:col-span-2'}`}>
            <Image
                img={photo.attributes}
                sizes="150wv"
                src="xlarge"
                classString="w-full h-full object-cover object-center"
                on:click={() => openLightbox(photo.attributes.formats.large.url, photo.attributes.alternativeText)}
            />
        </div>
    {/each}
</div>

<style>
.image-grid {
    grid-auto-rows: 50vw;
}
</style>