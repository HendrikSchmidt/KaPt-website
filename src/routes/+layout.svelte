<script>
  import "../app.css";
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { title } from '$lib/utils';
  import { variables } from '$lib/variables';
  import NavLink from "../lib/components/NavLink.svelte";

  export let data;
  let { logo } = data;

  $: isEnglish = $page.url.pathname.startsWith(`${base}/en`);
  $: currentLang = isEnglish ? 'en' : 'fr';
  
  $: getLocalizedString = (key) => {
    return variables.localization[key][currentLang];
  }

  $: getLocalizedSlug = (slug, lang=currentLang) => {
    return base + variables.localizedSlugs[slug][lang];
  }

  $: getTranslatedSlug = () => {
    let currentPath = $page.url.pathname.replace(base, '');
    currentPath = currentPath === '' ? '/' : currentPath;
    const lang = isEnglish ? 'fr' : 'en';
    return getLocalizedSlug(variables.inverseSlugMap[currentPath], lang);
  }
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

<div class="app">
  <aside class="fixed top-0 left-0 flex flex-col justify-between p-3 w-80 h-screen">
    <a class="logo text-8xl" href="{getLocalizedSlug('home')}">KaPt</a>

    <ul class="text-2xl font-extralight uppercase">
      <li class="py-1">
        <NavLink href="{getLocalizedSlug('philosophy')}">{getLocalizedString('philosophy')}</NavLink>
      </li>
      <li class="py-1">
        <NavLink href="{getLocalizedSlug('projects')}">{getLocalizedString('projects')}</NavLink>
      </li>
      <li class="py-1">
        <NavLink href="{getLocalizedSlug('contact')}">{getLocalizedString('contact')}</NavLink>
      </li>
    </ul>
  </aside>

  <main class="ml-80 mr-12">
    <slot />
  </main>

  <div class="fixed top-0 right-0 p-3 text-2xl" >
    {#if $page.url.pathname.startsWith(`${base}/en`)}
      <a href="{getTranslatedSlug()}">FR</a> / <span class="underline">EN</span>
    {:else}
      <span class="underline">FR</span> / <a href="{getTranslatedSlug()}">EN</a>
    {/if}
  </div>
</div>

<style>
  .logo {
    font-family: 'ArchivoBlack';
  }
</style>