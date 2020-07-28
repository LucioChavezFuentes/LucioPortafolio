import enUSMessages from './en.json';
import esMxMessages from './es_MX.json';
import MexicoFlag from 'assets/img/flags/MexicoFlag.svg'
import USFlag from 'assets/img/flags/U.SFlag.svg'

const AppLocale = {
    enUS: {
        locale: 'en-US' as const,
        messages: {
            ...enUSMessages
        },
        icon: USFlag,
    },

    esMX: {
        locale: 'es-MX' as const,
        messages: {
            ...esMxMessages
        },
        icon: MexicoFlag,
    }
};

export default AppLocale;