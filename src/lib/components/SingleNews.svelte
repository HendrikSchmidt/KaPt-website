<script>
    import Image from '$lib/components/Image.svelte';
    import i18n from '$lib/i18n';
    import SvelteMarkdown from 'svelte-markdown';

    export let singleNews;
    export let lang;
    $: photos = singleNews.Images.data;

    const landscape_sizes = '(max-width: 767px) 100vw, 75vw';
    const portrait_sizes = '(max-width: 767px) 100vw, 50vw';

    const getGridClasses = (photoAttributes) => {
        const isPortrait = photoAttributes.width < photoAttributes.height;
        return isPortrait ? 'col-span-6 md:col-span-2' : 'col-span-6 md:col-span-4 md:col-start-3';
    };
</script>

<div class="image-grid w-full grid grid-flow-dense grid-cols-6 gap-12">
    <div
        class="col-span-6 md:col-span-2 prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl max-w-none"
    >
        <div class="flex mb-2 justify-between md:justify-start">
            <span class="max-md:hidden flex-none md:w-1/2 text-zinc-400 lowercase mr-2"
                >{i18n.getLocalizedString('name', lang)}</span
            >
            <span class="font-bold">{singleNews.Nom.toUpperCase()}</span>
        </div>
        <div class="flex mb-2 justify-between md:justify-start">
            <span class="max-md:hidden flex-none md:w-1/2 text-zinc-400 lowercase mr-2"
                >{i18n.getLocalizedString('location', lang)}</span
            >
            <span>{singleNews.Localisation}</span>
        </div>
    </div>
    {#each photos as photo, i}
        <div class="overflow-hidden {getGridClasses(photo.attributes)}">
            <Image
                img={photo.attributes}
                sizes={photo.attributes.width > photo.attributes.height
                    ? landscape_sizes
                    : portrait_sizes}
                src="xlarge"
                classString="object-cover"
            />
        </div>
    {/each}
    <div
        class="contents prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl text-justify overflow-scroll"
    >
        <SvelteMarkdown source={singleNews.Description} />
    </div>
</div>

<style global>
    .contents p {
        margin: 0;
        place-self: center;
        grid-column: span 6 / span 6;
    }
    .contents p:first-of-type {
        grid-row-start: 3;
    }
    .contents p:nth-of-type(2) {
        grid-row-start: 5;
    }
    .contents p:nth-of-type(3) {
        grid-row-start: 7;
    }
    @media (min-width: 768px) {
        .image-grid {
            grid-template-rows: auto fit-content(50vw) 1fr;
        }
        .contents p {
            grid-column: span 4 / span 4;
            grid-column-start: 1;
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
