<script>
    import Image from "$lib/components/Image.svelte";
    import i18n from "$lib/i18n";

    export let project;
    export let lang;
    $: photos = project.Images.data;
    $: plans = project.Plans.data;

    const landscape_sizes = "(max-width: 767px) 100vw, 75vw";
    const portrait_sizes = "(max-width: 767px) 100vw, 50vw";

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
            <span class="flex-none md:w-1/2 text-zinc-400 lowercase">{i18n.getLocalizedString('name', lang)}</span>
            <span class="max-sm:text-right">{project.Nom.toUpperCase()}</span>
        </div>
        <div class="flex mb-2 justify-between md:justify-start">
            <span class="flex-none md:w-1/2 text-zinc-400 lowercase">{i18n.getLocalizedString('location', lang)}</span>
            <span class="max-sm:text-right">{project.Localisation}</span>
        </div>
        <div class="flex mb-2 justify-between md:justify-start">
            <span class="flex-none md:w-1/2 text-zinc-400 lowercase">{i18n.getLocalizedString('program', lang)}</span>
            <span class="max-sm:text-right">{project.Programme}</span>
        </div>
        <div class="flex mb-2 justify-between md:justify-start">
            <span class="flex-none md:w-1/2 text-zinc-400 lowercase">{i18n.getLocalizedString('area', lang)}</span>
            <span class="max-sm:text-right">{project.Surface} m<sup>2</sup></span>
        </div>
    </div>
    <div class="row-start-4 md:row-start-2 col-span-6 md:col-start-3 md:col-span-4 text-justify overflow-scroll">
        {project.Description}
    </div>
    <div class="overflow-hidden row-start-3 col-span-6 md:col-span-4">
        <Image
            img={plans[0].attributes}
            sizes="300wv"
            src="xlarge"
            classString="object-contain"
            on:click={() => openLightbox(plans[0].attributes.formats.large.url, plans[0].attributes.alternativeText)}
        />
    </div>
    {#each photos as photo, i}
        <div class="overflow-hidden col-span-6 {photo.attributes.width > photo.attributes.height ? 'md:col-span-4' : 'md:col-span-2'}">
            <Image
                img={photo.attributes}
                sizes="{photo.attributes.width > photo.attributes.height ? landscape_sizes : portrait_sizes}"
                src="xlarge"
                classString="object-cover"
                on:click={() => openLightbox(photo.attributes.formats.large.url, photo.attributes.alternativeText)}
            />
        </div>
    {/each}
</div>

<style>
@media (min-width: 768px) {
    .image-grid {
        grid-template-rows: auto fit-content(50vw) 1fr;
    }
}
</style>
