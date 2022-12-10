const apiPath = 'https://kapt-cms-production.up.railway.app/api';


const localizedSlugs = {
	home: {
		en: '/en',
		fr: '/',
	},
	philosophy: {
		en: '/en/philosophy',
		fr: '/philosophie',
	},
	projects: {
		en: '/en/projects',
		fr: '/projets',
	},
	contact: {
		en: '/en/contact',
		fr: '/contact',
	},
};

const inverseSlugMap = {};
for (const [key, slugMap] of Object.entries(localizedSlugs)) {
	for (const [lang, slug] of Object.entries(slugMap)) {
		inverseSlugMap[slug] = key;
	}
}

export const variables = {
	apiPath,
	markdownOptions: {
		breaks: true,
	},
	localizedSlugs,
	inverseSlugMap,
	localization: {
		philosophy: {
			en: 'Philosophy',
			fr: 'Philosophie',
		},
		projects: {
			en: 'Projects',
			fr: 'Projets',
		},
		contact: {
			en: 'Contact',
			fr: 'Contact',
		},
	},
};
