import { variables } from '$lib/variables';

export async function load() {
	const response = await fetch(`${variables.apiPath}/about?populate[Biographie][populate][0]=Portrait`);
	const aboutData = await response.json();

	if (aboutData) {
		return {
			about: aboutData.data.attributes,
		};
	}

	return {
		status: 404,
	};
}
