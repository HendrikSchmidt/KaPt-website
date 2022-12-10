import { sluggify } from './utils';

const dev = process.env.NODE_ENV === 'development';
const basePath = 'http://localhost:1337';
const apiPath = 'https://kapt-cms-production.up.railway.app/api';

export const variables = {
	basePath,
	apiPath,
	markdownOptions: {
		breaks: true,
	},
};
