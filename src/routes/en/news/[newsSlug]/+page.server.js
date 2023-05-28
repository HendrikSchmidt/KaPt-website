import { loadDataFromApi, sluggify, newsSlugsToIds } from '$lib/utils';

export async function load({ params }) {
  const slugsToIds = await newsSlugsToIds;
  return { singleNews: loadDataFromApi(fetch, `/news/${slugsToIds['en'][sluggify(params.newsSlug)]}?populate=*&locale=en`) };
}
