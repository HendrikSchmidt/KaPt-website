import { loadDataFromApi, sluggify, projectSlugsToIds } from '$lib/utils';

export async function load({ params }) {
    const slugsToIds = await projectSlugsToIds;
    return {
        project: await loadDataFromApi(
            fetch,
            `/projects/${slugsToIds['en'][sluggify(params.projectSlug)]}?populate=*&locale=en`
        )
    };
}
