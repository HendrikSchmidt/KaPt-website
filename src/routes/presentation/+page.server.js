import { variables } from '$lib/variables';

export async function load() {
	const response = await fetch(`${variables.apiPath}/presentation?populate=*`);
	const presentationData = await response.json();

	console.log(presentationData);

	if (presentationData) {
		return {
			presentation: presentationData.data.attributes,
		};
	}

	return {
		status: 404,
	};
}
