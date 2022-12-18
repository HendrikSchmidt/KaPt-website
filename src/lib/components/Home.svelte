<script>
	export let projects;

    const firstProject = projects[0].attributes;
    const firstImage = firstProject.Images.data[0].attributes;
</script>

<div class="w-full h-screen overflow-hidden">
    <img class="w-full h-full object-cover" src={firstImage.url} alt={firstImage.alternativeText} />
</div>
