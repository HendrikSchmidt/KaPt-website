<script>
  import { page } from '$app/stores';

  export let href;
</script>

<a {href} class="hover:italic uppercase" class:italic="{$page.url.pathname.includes(href)}">
    <slot />
</a>
