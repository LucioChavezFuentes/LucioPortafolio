
import getDarkOrLightTheme from './getDarkOrLightTheme'

//type
import Type from 'types/elementType'
const setTheme = (elementType: Type, theme) => (props) => getDarkOrLightTheme(theme, elementType, props)

export default setTheme