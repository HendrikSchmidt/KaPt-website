import { loadDataFromApi } from '$lib/utils';

export const load = async ({ fetch }) => ({
    news: await loadDataFromApi(fetch, '/news?populate=*&locale=en')
});
