<script lang="ts">
	// import SvelteMarkdown from 'svelte-markdown';
	import { variables } from '$lib/variables';
	import { title } from '$lib/utils';

	export let data;
	let presentation = data.presentation;

    console.log(presentation.PresentationPictures.data);

	title.set('Presentation');
</script>

<h1>{presentation.Title}</h1>
<p>{presentation.Description}</p>
<img src={`${variables.basePath}${presentation.PresentationPictures.data[0].attributes.url}`} />