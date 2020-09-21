import enUSMessages from './compiled-lang/en_US.json';
import esMxMessages from './compiled-lang/es_MX.json';
import MexicoFlag from 'assets/img/flags/MexicoFlag'
import USAFlag from 'assets/img/flags/USAFlag'

const AppLocale = {
    enUS: {
        locale: 'enUS' as const,
        lenguage: 'en',
        messages: {
            ...enUSMessages
        },
        icon: USAFlag,
    },

    esMX: {
        locale: 'esMX' as const,
        lenguage: 'es',
        messages: {
            ...esMxMessages
        },
        icon: MexicoFlag,
    }
};

export default AppLocale;