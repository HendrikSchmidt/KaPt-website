<script>
    import Image from '$lib/components/Image.svelte';

	export let projects;

    const firstProject = projects[0].attributes;
    const firstImage = firstProject.Images.data[0].attributes;
</script>

<div class="w-full overflow-hidden landing-image">
    <Image
        img={firstImage}
        sizes="150wv"
        src="xlarge"
        classString="w-full h-full object-cover object-center saturate-0 transition duration-500 transform hover:scale-110"
    />
</div>

<style>
.landing-image {
    height: calc(100vh - 14rem);
}
</style>
