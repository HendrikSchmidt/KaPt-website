<script>
	import { variables } from '$lib/variables';
	import { title } from '$lib/utils';

	export let data;
	let home = data.home;
	let logo = data.logo;
    
    console.log(home);
    console.log(logo);

	title.set('KaPt');
</script>

<div class="mt-24 flex justify-center">
    <img src={logo.Large.data.attributes.url} alt="logo" />
</div>
