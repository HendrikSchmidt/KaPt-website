<script>
  import "../app.css";
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { title } from '$lib/utils';
  import i18n from '$lib/i18n';
  import NavLink from "../lib/components/NavLink.svelte";

  export let data;
  let { logo } = data;

  $: isEnglish = $page.url.pathname.startsWith(`${base}/en`);
  $: currentLang = isEnglish ? 'en' : 'fr';
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

<div class="app w-screen text-zinc-900">
  <aside class="fixed top-0 left-0 flex max-sm:flex-col justify-between p-3 w-full z-10">
    <a class="logo text-6xl md:text-8xl flex-0" href="{i18n.getLocalizedSlug('home', currentLang)}">KaPt</a>

    <ul class="flex-0 lg:text-2xl font-extralight flex max-sm:justify-around max-sm:w-full align-right">
      <li class="px-2 py-1">
        <NavLink href="{i18n.getLocalizedSlug('philosophy', currentLang)}">
          {i18n.getLocalizedString('philosophy', currentLang)}
        </NavLink>
      </li>
      <li class="px-2 py-1">
        <NavLink href="{i18n.getLocalizedSlug('projects', currentLang)}">
          {i18n.getLocalizedString('projects', currentLang)}
        </NavLink>
      </li>
      <li class="px-2 py-1">
        <NavLink href="{i18n.getLocalizedSlug('contact', currentLang)}">
          {i18n.getLocalizedString('contact', currentLang)}
        </NavLink>
      </li>
      <li class="px-2 py-1 max-sm:hidden">
        {#if $page.url.pathname.startsWith(`${base}/en`)}
          <a class="text-zinc-400" href="{i18n.getTranslatedSlug($page.url.pathname, "fr")}">fr</a> / <span>en</span>
        {:else}
          <span>fr</span> / <a class="text-zinc-400" href="{i18n.getTranslatedSlug($page.url.pathname, "en")}">en</a>
        {/if}
      </li>
    </ul>
  </aside>

  <main class="sm:pl-48 w-full">
    <slot />
  </main>

  <div class="sm:hidden fixed top-0 right-0 p-3 sm:text-2xl z-20" >
    {#if $page.url.pathname.startsWith(`${base}/en`)}
      <a class="text-zinc-400" href="{i18n.getTranslatedSlug($page.url.pathname, "fr")}">fr</a> / <span>en</span>
    {:else}
      <span>fr</span> / <a class="text-zinc-400" href="{i18n.getTranslatedSlug($page.url.pathname, "en")}">en</a>
    {/if}
  </div>
</div>

<style>
  .logo {
    font-family: 'ArchivoBlack';
  }
</style>