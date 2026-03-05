import React, { createContext, useContext, useState, useEffect } from 'react'

const STORAGE_KEY = 'portfolio-theme'
const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved !== null) return saved === 'dark'
    } catch (_) {}
    return true
  })

  useEffect(() => {
    const value = isDark ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', value)
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch (_) {}
  }, [isDark])

  const toggleTheme = () => setIsDark((prev) => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
