import { loadDataFromApi } from '$lib/utils';

export const load = async ({ fetch }) => ({
    contact: loadDataFromApi(fetch, '/contact')
});
