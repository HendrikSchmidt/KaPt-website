import { loadDataFromApi } from '$lib/utils';

export const load = ({ fetch }) => ({
    projects: loadDataFromApi(fetch, '/projects?populate=*&locale=en')
});
