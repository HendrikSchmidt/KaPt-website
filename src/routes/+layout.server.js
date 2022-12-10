export const prerender = true;

import { variables } from '$lib/variables';

export async function load({ fetch }) {
    const response = await fetch(`${variables.apiPath}/logo?populate=*`);
    const logoData = await response.json();

    return {
        logo: logoData.data.attributes,
    };
}
