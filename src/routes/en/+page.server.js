import { variables } from '$lib/variables';

export async function load() {
	const homeResponse = await fetch(`${variables.apiPath}/home?populate=*`);
	const homeData = await homeResponse.json();
	const response = await fetch(`${variables.apiPath}/projects?populate=*`);
	const projectsData = await response.json();

	if (homeData) {
		return {
			home: homeData.data.attributes,
			projects: projectsData.data,
		};
	}

	return {
		status: 404,
	};
}
