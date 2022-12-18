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

<div class="app">
  <aside class="fixed top-0 left-0 flex flex-col justify-between p-3 w-80 h-screen">
    <a class="logo text-8xl" href="{i18n.getLocalizedSlug('home', currentLang)}">KaPt</a>

    <ul class="text-2xl font-extralight uppercase">
      <li class="py-1">
        <NavLink href="{i18n.getLocalizedSlug('philosophy', currentLang)}">
          {i18n.getLocalizedString('philosophy', currentLang)}
        </NavLink>
      </li>
      <li class="py-1">
        <NavLink href="{i18n.getLocalizedSlug('projects', currentLang)}">
          {i18n.getLocalizedString('projects', currentLang)}
        </NavLink>
      </li>
      <li class="py-1">
        <NavLink href="{i18n.getLocalizedSlug('contact', currentLang)}">
          {i18n.getLocalizedString('contact', currentLang)}
        </NavLink>
      </li>
    </ul>
  </aside>

  <main class="ml-80 mr-12">
    <slot />
  </main>

  <div class="fixed top-0 right-0 p-3 text-2xl" >
    {#if $page.url.pathname.startsWith(`${base}/en`)}
      <a href="{i18n.getTranslatedSlug($page.url.pathname, "fr")}">FR</a> / <span class="underline">EN</span>
    {:else}
      <span class="underline">FR</span> / <a href="{i18n.getTranslatedSlug($page.url.pathname, "en")}">EN</a>
    {/if}
  </div>
</div>

<style>
  .logo {
    font-family: 'ArchivoBlack';
  }
</style>