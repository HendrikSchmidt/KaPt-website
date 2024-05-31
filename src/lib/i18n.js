import { error } from '@sveltejs/kit';
import { base } from '$app/paths';
import { sluggify } from './utils';

const localizedSlugs = {
    home: {
        en: '',
        fr: ''
    },
    philosophy: {
        en: 'philosophy',
        fr: 'philosophie'
    },
    projects: {
        en: 'projects',
        fr: 'projets'
    },
    contact: {
        en: 'contact',
        fr: 'contact'
    },
    news: {
        en: 'news',
        fr: 'news'
    }
};

const inverseSlugMap = {};
for (const [key, slugMap] of Object.entries(localizedSlugs)) {
    for (const [lang, slug] of Object.entries(slugMap)) {
        inverseSlugMap[slug] = key;
    }
}

const getLocalizedSlug = (slug, lang = currentLang) => {
    try {
        return `${base}${lang === 'en' ? '/en/' : '/'}${localizedSlugs[slug][lang]}`;
    } catch (e) {
        error(404, { message: 'Not found' });
    }
};

const getTranslatedSlug = (page, lang) => {
    const path = page.url.pathname;
    let currentPath = path.replace(base, '').replace('/en', '');
    if (currentPath === '' || currentPath === '/') {
        return getLocalizedSlug('home', lang);
    }
    // Split into parts and remove the first empty string due to the leading slash
    let allPathParts = currentPath.split('/').slice(1);
    // Translate the first part which is the page name
    let pathLocation = allPathParts[0];
    let translation = getLocalizedSlug(inverseSlugMap[pathLocation], lang);
    // Add the second part if it exists (projects, news)
    if (allPathParts.length > 1) {
        // not sure whether this is needed
        try {
            const pageObj = page.data.project ?? page.data.singleNews;
            const localization = pageObj.localizations.data[0].attributes;
            translation += '/' + sluggify(localization.Nom);
        } catch (e) {
            error(404, { message: 'Not found' });
        }
    }
    return translation;
};

const localization = {
    philosophy: {
        en: 'Philosophy',
        fr: 'Philosophie'
    },
    projects: {
        en: 'Projects',
        fr: 'Projets'
    },
    contact: {
        en: 'Contact',
        fr: 'Contact'
    },
    news: {
        en: 'News',
        fr: 'News'
    },
    mail: {
        en: 'Mail',
        fr: 'Email'
    },
    phone: {
        en: 'Phone',
        fr: 'Téléphone'
    },
    address: {
        en: 'Address',
        fr: 'Adresse'
    },
    social: {
        en: 'Social media',
        fr: 'Réseaux sociaux'
    },
    name: {
        en: 'Name',
        fr: 'Nom'
    },
    location: {
        en: 'Location',
        fr: 'Localisation'
    },
    program: {
        en: 'Program',
        fr: 'Programme'
    },
    area: {
        en: 'Area',
        fr: 'Surface'
    },
    biographies: {
        en: 'Biographies',
        fr: 'Biographies'
    },
    noNews: {
        en: 'No news available at the moment.',
        fr: 'Aucune actualité disponible pour le moment.'
    }
};

const getLocalizedString = (key, currentLang) => {
    return localization[key][currentLang];
};

const i18n = {
    getLocalizedSlug,
    getTranslatedSlug,
    getLocalizedString
};

export default i18n;
