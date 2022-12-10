import { variables } from '$lib/variables';

export async function load() {
	const homeResponse = await fetch(`${variables.apiPath}/home?populate=*`);
	const homeData = await homeResponse.json();

	if (homeData) {
		return {
			home: homeData.data.attributes,
		};
	}

	return {
		status: 404,
	};
}
