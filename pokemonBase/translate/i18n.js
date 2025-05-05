import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import br from './br.json';

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'pt-BR',
    resources: {
        'pt-BR': pt-BR,
    },
    react: {
        useSuspense: false,
    },
    interpolation: {
      escapeValue: false
    }
  });

// i18n.use(initReactI18next).init({
//   resources: {
//     pt: { translation: br }
//   },
//   lng: 'pt',
//   fallbackLng: 'pt',
//   interpolation: {
//     escapeValue: false
//   }
// });

export default i18n;