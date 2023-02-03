<script>
	export let projects;

    const firstProject = projects[0].attributes;
    const firstImage = firstProject.Images.data[0].attributes;
</script>

<div class="w-full overflow-hidden landing-image">
    <img class="w-full h-full object-cover" src={firstImage.url} alt={firstImage.alternativeText} />
</div>

<style>
.landing-image {
    height: calc(100vh - 14rem);
}
</style>