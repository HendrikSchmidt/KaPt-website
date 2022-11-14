import { sluggify } from './utils';

const dev = process.env.NODE_ENV === 'development';
const basePath = 'http://localhost:1337';
const apiPath = dev
	? 'http://localhost:1337/api'
	: 'https://kapt-cms-production.up.railway.app/api';

const getSlugsToIdsMapping = async (route, fieldToGetSlugFrom) => {
	const response = await fetch(`${apiPath}/${route}?pagination[pageSize]=100`);
	const collection = await response.json();
	const slugsToIds = {};
	collection.data.forEach(
		(object) => (slugsToIds[sluggify(object.attributes[fieldToGetSlugFrom])] = object.id)
	);
	return slugsToIds;
};

export const variables = {
	basePath,
	apiPath,
	markdownOptions: {
		breaks: true,
	},
	// projectSlugsToIds: getSlugsToIdsMapping('projekte', 'Titel'),
	// categorySlugsToIds: getSlugsToIdsMapping('kategorien', 'Anzeigename'),
};
