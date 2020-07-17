import ui, { setDarkTheme, setLightTheme } from './redux/slices/uiSlice';

describe('switchTheme', () => {
    it('should switch themes', () => {
      const action1 = setDarkTheme()
      const action2 = setLightTheme()
  
      expect(action1.type).toEqual('setDarkTheme')
      expect(action2.type).toEqual('setLightTheme')
    })
  })