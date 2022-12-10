<script>
  import "../app.css";
  import { base } from '$app/paths';
  import { title } from '$lib/utils';
  import NavLink from "../lib/NavLink.svelte";

  export let data;
  let {logo} = data;
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

<div class="app">
  <aside class="fixed top-0 left-0 flex flex-col justify-between p-3 w-80 h-screen">
    <a class="logo text-8xl" href="{base}/">KaPt</a>

    <ul class="text-2xl font-extralight uppercase">
      <li class="py-1">
        <NavLink href="{base}/philosophie">Philosophie</NavLink>
      </li>
      <li class="py-1">
        <NavLink href="{base}/projets">Projets</NavLink>
      </li>
      <li class="py-1">
        <NavLink href="{base}/contact">Contact</NavLink>
      </li>
    </ul>
  </aside>

  <main class="ml-80 mr-12">
    <slot />
  </main>

  <div class="fixed top-0 right-0 p-3 text-2xl" >
    <a href="{base}/">FR</a> / <a class="text-gray-400" href="{base}/">EN</a>
  </div>
</div>

<style>
  .logo {
    font-family: 'ArchivoBlack';
  }
</style>