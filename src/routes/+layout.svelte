<script>
  import "../app.css";
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { title } from '$lib/utils';
  import i18n from '$lib/i18n';
  import NavLink from "../lib/components/NavLink.svelte";

  export let data;
  let { logo } = data;

  $: currentLang = $page.url.pathname.startsWith(`${base}/en`) ? 'en' : 'fr';
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

<div class="app w-screen text-zinc-900" data-sveltekit-preload-data="hover">
  <aside class="fixed top-0 left-0 flex flex-wrap justify-between p-4 sm:p-8 w-full z-10 max-sm:bg-white">
    <a class="logo text-6xl md:text-8xl flex-0" href="{i18n.getLocalizedSlug('home', currentLang)}">KaPt</a>

    <div class="flex-0 lg:text-2xl z-20 sm:flex-1 text-right">
      {#if $page.url.pathname.startsWith(`${base}/en`)}
        <a class="text-zinc-400" href="{i18n.getTranslatedSlug($page.url.pathname, "fr")}">fr</a> / <span>en</span>
      {:else}
        <span>fr</span> / <a class="text-zinc-400" href="{i18n.getTranslatedSlug($page.url.pathname, "en")}">en</a>
      {/if}
    </div>
    
    <ul class="flex justify-between max-sm:w-full max-sm:py-2 max-sm:order-last lg:text-2xl">
      <li class="sm:pl-4">
        <NavLink href="{i18n.getLocalizedSlug('philosophy', currentLang)}">
          {i18n.getLocalizedString('philosophy', currentLang)}
        </NavLink>
      </li>
      <li class="sm:pl-4">
        <NavLink href="{i18n.getLocalizedSlug('projects', currentLang)}">
          {i18n.getLocalizedString('projects', currentLang)}
        </NavLink>
      </li>
      <li class="sm:pl-4">
        <NavLink href="{i18n.getLocalizedSlug('contact', currentLang)}">
          {i18n.getLocalizedString('contact', currentLang)}
        </NavLink>
      </li>
    </ul>
    
  </aside>

  <main class="mt-40 p-4 sm:p-8 w-full flex flex-col items-center">
    <slot />
  </main>
</div>

<style>
  .logo {
    font-family: 'ArchivoBlack';
  }
</style>
