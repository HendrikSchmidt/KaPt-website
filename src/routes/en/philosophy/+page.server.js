import { loadDataFromApi } from '$lib/utils';

export const load = async ({ fetch }) => ({
	philosophy: loadDataFromApi(fetch, '/philosophy?populate[Biographies][populate][0]=Portrait&locale=en'),
});
