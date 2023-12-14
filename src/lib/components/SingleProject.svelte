<script>
    import Image from '$lib/components/Image.svelte';
    import i18n from '$lib/i18n';
    import SvelteMarkdown from 'svelte-markdown';

    export let project;
    export let lang;
    $: images = project.Images.data.map((image) => ({
        ...image,
        isPortrait: image.attributes.width < image.attributes.height
    }));
</script>

<div class="image-grid w-full grid grid-flow-dense grid-cols-6 gap-12">
    <div
        class="col-span-6 md:col-span-2 prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl max-w-none"
    >
        <div class="flex mb-2 justify-between md:justify-start">
            <span class="max-md:hidden flex-none md:w-1/2 text-zinc-400 lowercase mr-2"
                >{i18n.getLocalizedString('name', lang)}</span
            >
            <span class="font-bold">{project.Nom.toUpperCase()}</span>
        </div>
        <div class="flex mb-2 justify-between md:justify-start">
            <span class="max-md:hidden flex-none md:w-1/2 text-zinc-400 lowercase mr-2"
                >{i18n.getLocalizedString('location', lang)}</span
            >
            <span>{project.Localisation}</span>
        </div>
        <div class="flex mb-2 justify-between md:justify-start">
            <span class="max-md:hidden flex-none md:w-1/2 text-zinc-400 lowercase mr-2"
                >{i18n.getLocalizedString('program', lang)}</span
            >
            <span>{project.Programme}</span>
        </div>
        <div class="flex mb-2 justify-between md:justify-start">
            <span class="max-md:hidden flex-none md:w-1/2 text-zinc-400 lowercase mr-2"
                >{i18n.getLocalizedString('area', lang)}</span
            >
            <span>{project.Surface} m<sup>2</sup></span>
        </div>
    </div>
    <div
        class="contents prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl text-justify overflow-scroll"
    >
        <SvelteMarkdown source={project.Description} />
    </div>
    {#each images as image, i}
        <div
            class="overflow-hidden col-span-6 {image.isPortrait
                ? 'portrait md:col-span-2'
                : 'landscape md:col-span-4'}"
        >
            <Image
                img={image.attributes}
                sizes={image.isPortrait
                    ? '(max-width: 767px) 100vw, 50vw'
                    : '(max-width: 767px) 100vw, 75vw'}
                src="xlarge"
                classString="object-cover"
            />
        </div>
    {/each}
</div>

<style global>
    .contents p {
        margin: 0;
        place-self: center;
        grid-column: span 6 / span 6;
    }
    .contents p:first-of-type {
        grid-row-start: 4;
    }
    .contents p:nth-of-type(2) {
        grid-row-start: 6;
    }
    .contents p:nth-of-type(3) {
        grid-row-start: 8;
    }
    @media (min-width: 768px) {
        .image-grid {
            grid-auto-rows: 1fr;
        }
        .contents p {
            grid-column: span 4 / span 4;
            grid-column-start: 3;
        }
        .contents p:first-of-type {
            grid-row-start: 2;
        }
        .contents p:nth-of-type(2) {
            grid-row-start: 4;
        }
        .contents p:nth-of-type(3) {
            grid-row-start: 6;
        }
    }
</style>
