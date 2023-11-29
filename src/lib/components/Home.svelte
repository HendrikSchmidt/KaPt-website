<script>
  import { onMount } from 'svelte';
  import i18n from '$lib/i18n';
  import { sluggify } from '$lib/utils';
  import Image from '$lib/components/Image.svelte';

  export let home;
  export let lang;

  const projects = home.Projets.data.map((project) => ({
      ...project,
      url: `${i18n.getLocalizedSlug('projects', lang)}/${sluggify(project.attributes.Nom)}`,
  }));
  const news = home.News.data.map((newsItem) => ({
      ...newsItem,
      url: `${i18n.getLocalizedSlug('news', lang)}/${sluggify(newsItem.attributes.Nom)}`,
  }));
  const pages = projects.concat(news);
  let currentImageIndex = 0;

  // shuffle through pages every 5 seconds
  onMount(() => {
    const interval = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % pages.length;
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="w-full overflow-hidden landing-image relative aspect-[4/3] md:aspect-[3/2]">
  {#if pages.length}
    <a
      href="{pages[currentImageIndex].url}"
    >
      {#each pages as page, i}
        <Image
          img={page.attributes.Images.data[0].attributes}
          sizes="150wv"
          src="xlarge"
          lazy={i > 0}
          pictureRelative={false}
          classString="absolute object-cover saturate-0 hover:saturate-100 {i === currentImageIndex
            ? 'opacity-100 z-10'
            : 'opacity-0 z-0'}"
        />
      {/each}
    </a>
  {/if}
</div>
