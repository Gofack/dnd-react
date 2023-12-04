import i18next from 'i18next';
import en from './i18n/en/en.json';

export const defaultNS = 'ns1';

i18next.init({
	debug: true,
	fallbackLng: 'en',
	defaultNS,
	resources: {
		en: {
			ns1: en,
		},
	},
});

export default i18next;