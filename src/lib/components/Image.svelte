<script>
  export let lazy = false;
  export let img;
  export let src;
  export let classString = '';
  export let sizes = '100vw';
  export let pictureRelative = true;

  $: formats = img.formats;
  const scales = {
    small: '500w',
    medium: '750w',
    large: '1000w',
    xlarge: '1500w'
  };
  const replaceJPGWithWebP = (url) => url.replace(/\.jpe?g/gi, '.webp');
  $: srcset = Object.entries(scales)
    .filter(([scale]) => formats[scale])
    .map(([scale, width]) => `${formats[scale].url} ${width}`)
    .join();
  srcset += `, ${img.url} 2000w`;
</script>

<picture class={pictureRelative && 'relative'}>
  <source type="image/webp" srcset={replaceJPGWithWebP(srcset)} {sizes} />
  <img
    class="w-full h-full object-center transition duration-1000 transform hover:scale-110 {classString}"
    loading={lazy ? 'lazy' : 'eager'}
    src={formats[src] ? formats[src].url : formats.small.url}
    alt={img.alternativeText}
  />
  <p class="z-20 opacity-0 transition-all text-xs absolute bottom-0 right-0 px-1 text-zinc-500 bg-white">{img.caption}</p>
</picture>

<style>
  picture:hover p {
    opacity: 1;
  }
</style>
