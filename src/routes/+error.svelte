<script>
    import { page } from '$app/stores';
    console.error($page.error);
</script>

<h1>{$page.error.message}</h1>
