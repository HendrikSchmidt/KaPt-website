import { loadDataFromApi, sluggify, newsSlugsToIds } from '$lib/utils';

export async function load({ params }) {
    const slugsToIds = await newsSlugsToIds;
    return {
        singleNews: await loadDataFromApi(
            fetch,
            `/news/${slugsToIds['fr'][sluggify(params.newsSlug)]}?populate=*`
        )
    };
}
