import { variables } from '$lib/variables';

export async function load() {
	const response = await fetch(`${variables.apiPath}/projects?populate=*`);
	const projectsData = await response.json();

	if (projectsData) {
		return {
			projects: projectsData.data,
		};
	}

	return {
		status: 404,
	};
}
