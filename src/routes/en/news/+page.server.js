import { loadDataFromApi } from '$lib/utils';

export const load = ({ fetch }) => ({
  news: loadDataFromApi(fetch, '/news?populate=*&locale=en'),
});
