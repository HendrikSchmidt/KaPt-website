<script>
	export let projects;

    const firstProject = projects[0].attributes;
    const firstImage = firstProject.Images.data[0].attributes;
</script>

<div class="w-max">
    <img class="h-screen" src={firstImage.url} alt={firstImage.alternativeText} />
</div>
