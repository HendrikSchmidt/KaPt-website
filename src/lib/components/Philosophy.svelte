<script>
    import SvelteMarkdown from 'svelte-markdown';
    import { markdownOptions } from '$lib/utils';

    export let philosophy;
</script>

<div
    class="container mx-auto md:w-5/6 lg:w-4/5 xl:w-3/4 2xl:w-2/3 text-justify prose prose-sm lg:prose-base xl:prose-lg 2xl:prose-xl max-w-none"
>
    <div class="mb-36 philosophy">
        <SvelteMarkdown source={philosophy.Philosophie} options={markdownOptions} />
    </div>
    {#each philosophy.Biographies as biographie, index (biographie.id)}
        <div class="my-4 sm:flex">
            <div class="max-sm:hidden w-60 flex-none pb-8">
                <img
                    src={biographie.Portrait.data.attributes.url}
                    alt={biographie.Portrait.data.attributes.alternativeText}
                />
            </div>
            <div class="sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 inline">
                <h3>{biographie.Nom}</h3>
                <div class="sm:hidden">
                    <img
                        class="w-60"
                        src={biographie.Portrait.data.attributes.url}
                        alt={biographie.Portrait.data.attributes.alternativeText}
                    />
                </div>
                <span class="[font-weight:500]">{biographie.Position}</span>
                <SvelteMarkdown source={biographie.Description} options={markdownOptions} />
            </div>
        </div>
    {/each}
</div>

<style global>
    .philosophy img {
        max-height: 75vh;
        margin: 0 auto;
    }
</style>
