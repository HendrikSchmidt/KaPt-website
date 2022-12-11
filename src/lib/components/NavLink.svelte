<script>
  import { page } from '$app/stores';

  export let href;
</script>

<a {href} class="hover:italic" class:underline="{$page.url.pathname.includes(href)}">
    <slot />
</a>
