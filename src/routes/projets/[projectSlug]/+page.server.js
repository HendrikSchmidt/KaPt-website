import { loadDataFromApi, sluggify, projectSlugsToIds } from '$lib/utils';

export async function load({ params }) {
    const slugsToIds = await projectSlugsToIds;
    return {
        project: loadDataFromApi(
            fetch,
            `/projects/${slugsToIds['fr'][sluggify(params.projectSlug)]}?populate=*`
        )
    };
}
