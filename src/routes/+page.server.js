import { variables } from '$lib/variables';

export async function load() {
	const homeResponse = await fetch(`${variables.apiPath}/home?populate=*`);
	const homeData = await homeResponse.json();
	const logoResponse = await fetch(`${variables.apiPath}/logo?populate=*`);
	const logoData = await logoResponse.json();

	if (homeData && logoData) {
		return {
			home: homeData.data.attributes,
			logo: logoData.data.attributes,
		};
	}

	return {
		status: 404,
	};
}
