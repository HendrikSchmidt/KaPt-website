import { loadDataFromApi } from '$lib/utils';

export const load = ({ fetch }) => ({
	home: loadDataFromApi(fetch, '/home?populate[Projets][populate]=*'),
});
