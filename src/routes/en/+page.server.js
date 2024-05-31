import { loadDataFromApi } from '$lib/utils';

export const load = async ({ fetch }) => ({
    home: await loadDataFromApi(
        fetch,
        '/home?populate[Projets][populate]=*&populate[News][populate]=*&locale=en'
    )
});
