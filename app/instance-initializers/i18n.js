export function initialize(application) {
  const i18n = application.lookup('service:i18n');
  const locale = getCurrentLocale(i18n.get('locales'));

  moment.locale(locale);
  i18n.set('locale', locale);
}

function getCurrentLocale(locales) {
  const language = navigator.languages[0] || navigator.language || navigator.userLanguage;
  return locales.includes(language.toLowerCase()) ? language : 'en';
}

export default {
  initialize
};
