import { loadDataFromApi } from '$lib/utils';

export const load = async ({ fetch }) => ({
    projects: await loadDataFromApi(fetch, '/projects?populate=*')
});
