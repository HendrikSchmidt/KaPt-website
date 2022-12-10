<script>
	import { title } from '$lib/utils';

	export let data;
	let home = data.home;
	let projects = data.projects;

	title.set('KaPt');
    const firstProject = projects[0].attributes;
    const firstImage = firstProject.Images.data[0].attributes;
</script>

<div class="min-h-screen">
    <img src={firstImage.url} alt={firstImage.alternativeText} />
</div>
