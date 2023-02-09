import { loadDataFromApi, sluggify, projectSlugsToIds } from '$lib/utils';

export async function load({ params }) {
	const slugsToIds = await projectSlugsToIds;
	return {project: loadDataFromApi(fetch, `/projects/${slugsToIds['en'][sluggify(params.projectSlug)]}?populate=*&locale=en`)};
}
