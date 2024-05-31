export const prerender = true;

import { loadDataFromApi } from '$lib/utils';

export const load = async ({ fetch }) => ({
    logo: await loadDataFromApi(fetch, '/logo?populate=*')
});
