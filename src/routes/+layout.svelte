<script>
  import "../app.css";
  // import { title } from '$lib/utils';

  export let data;
  let {logo} = data;

  console.log(logo)
  
</script>

<svelte:head>
  <!-- <title>{$title}</title> -->
</svelte:head>

<div class="app">
  <header class="flex flex-row justify-between items-center p-2 border-black border-b-4 font-semibold text-4xl">
    <a class="logo pr-3" href="/">
      <img class="h-12" src={logo.Small.data.attributes.url} alt="logo" />
    </a>

    <div>
      <a class="logo w-1/3 px-2 hover:italic" href="/a-propos">A Propos</a>
      <a class="logo w-1/3 px-2 hover:italic" href="/projets">Projets</a>
      <a class="logo w-1/3 px-2 hover:italic" href="/contact">Contact</a>
    </div>
    
    <div class="language-toggle justify-self-end" >
      <a class="font-mono italic hover:not-italic" href="/">EN</a>
    </div>
  </header>

  <main class="m-12 prose max-w-none">
    <slot />
  </main>
</div>
