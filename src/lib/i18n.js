import { base } from '$app/paths';

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
};

const getLocalizedSlug = (slug, lang=currentLang) => {
    return base + localizedSlugs[slug][lang];
};

const getTranslatedSlug = (path, lang) => {
    let currentPath = path.replace(base, '');
    currentPath = currentPath === '' ? '/' : currentPath;
    return getLocalizedSlug(inverseSlugMap[currentPath], lang);
}

const localization = {
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
};


const getLocalizedString = (key, currentLang) => {
    return localization[key][currentLang];
};

const i18n = {
  getLocalizedSlug,
  getTranslatedSlug,
  getLocalizedString,
};

export default i18n;
