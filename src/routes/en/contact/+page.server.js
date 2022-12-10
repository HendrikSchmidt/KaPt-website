import { variables } from '$lib/variables';

export async function load() {
	const response = await fetch(`${variables.apiPath}/contact`);
	const contactData = await response.json();

	if (contactData) {
		return {
			contact: contactData.data.attributes,
		};
	}

	return {
		status: 404,
	};
}
