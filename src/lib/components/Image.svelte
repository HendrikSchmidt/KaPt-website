<script>
    export let lazy = false;
    export let img;
    export let src;
    export let classString = "";
    export let sizes = "100vw";

    $: formats = img.formats;
    const scales = {
        small: '500w',
        medium: '750w',
        large: '1000w',
        xlarge: '1500w',
    };
    const replaceJPGWithWebP = url => url.replace(/\.jpe?g/gi, '.webp');
    $: srcset = Object.entries(scales).filter(([scale]) => formats[scale]).map(([scale, width]) => `${formats[scale].url} ${width}`).join();
    srcset += `, ${img.url} 2000w`;
</script>

<picture>
  <source
    type="image/webp"
    srcset={replaceJPGWithWebP(srcset)}
    sizes={sizes}
  />
  <img
    class={classString}
    loading={lazy ? 'lazy' : 'eager'}
    src={formats[src] ? formats[src].url : formats.small.url}
    alt={img.alternativeText}
    on:click
  />
</picture>

