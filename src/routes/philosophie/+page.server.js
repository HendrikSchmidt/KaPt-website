import { variables } from '$lib/variables';

export async function load() {
	const response = await fetch(`${variables.apiPath}/philosophy?populate[Biographies][populate][0]=Portrait`);
	const philosophyData = await response.json();

	if (philosophyData) {
		return {
			philosophy: philosophyData.data.attributes,
		};
	}

	return {
		status: 404,
	};
}
