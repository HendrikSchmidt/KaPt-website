export const prerender = true;

import { loadDataFromApi } from '$lib/utils';

export const load = ({ fetch }) => ({
    logo: loadDataFromApi(fetch, '/logo?populate=*'),
});
