import React from 'react'
import {useColorScheme} from 'react-native'
import {themes} from '../styles'

const ThemeContext = React.createContext()

function ThemeProvider(props) {
  // defaultTheme is either 'dark' or 'light'
  const defaultTheme = useColorScheme()
  const [themeName, setThemeName] = React.useState(defaultTheme)

  function toggleTheme() {
    setThemeName(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider
      value={{themeName, themes, toggleTheme}}
      {...props}
    />
  )
}

function useTheme(stylesheetBuilder) {
  const context = React.useContext(ThemeContext)
  if (!context)
    throw new Error('useTheme hook must be called within a ThemeProvider')

  const {themeName, themes, toggleTheme} = context
  const theme = themes[themeName]

  let styles = {}
  if (stylesheetBuilder && typeof stylesheetBuilder === 'function')
    styles = stylesheetBuilder(theme)

  return {styles, themeName, theme, toggleTheme}
}

export {ThemeProvider, useTheme}
