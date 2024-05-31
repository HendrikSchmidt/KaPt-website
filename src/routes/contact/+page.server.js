import { loadDataFromApi } from '$lib/utils';

export const load = async ({ fetch }) => ({
    contact: await loadDataFromApi(fetch, '/contact')
});
