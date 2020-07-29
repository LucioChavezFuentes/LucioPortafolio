import enUSMessages from './en.json';
import esMxMessages from './es_MX.json';
import MexicoFlag from 'assets/img/flags/MexicoFlag.svg'
import USAFlag from 'assets/img/flags/USAFlag.svg'

const AppLocale = {
    enUS: {
        locale: 'enUS' as const,
        messages: {
            ...enUSMessages
        },
        icon: USAFlag,
    },

    esMX: {
        locale: 'esMX' as const,
        messages: {
            ...esMxMessages
        },
        icon: MexicoFlag,
    }
};

export default AppLocale;