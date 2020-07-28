
import ui, { setDarkTheme, setLightTheme, changeLenguage } from './uiSlice';

describe('switchTheme', () => {
    it('should switch themes', () => {
      const action1 = setDarkTheme()
      const action2 = setLightTheme()
  
      expect(action1.type).toEqual('ui/setDarkTheme')
      expect(action2.type).toEqual('ui/setLightTheme')
    })

    it('change app locale', () => {
			const changeLenguageAction = changeLenguage({locale: 'enUS'})
			
			expect(changeLenguageAction.type).toEqual('ui/changeLenguage')
    })
  })