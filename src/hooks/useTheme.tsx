'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { islamicBlueTheme } from '@/styles/themes'

type Theme = typeof islamicBlueTheme

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(islamicBlueTheme)

  useEffect(() => {
    // Apply CSS custom properties for the theme
    const root = document.documentElement
    
    // Primary colors
    root.style.setProperty('--color-primary-50', theme.colors.primary[50])
    root.style.setProperty('--color-primary-100', theme.colors.primary[100])
    root.style.setProperty('--color-primary-500', theme.colors.primary[500])
    root.style.setProperty('--color-primary-600', theme.colors.primary[600])
    root.style.setProperty('--color-primary-700', theme.colors.primary[700])
    root.style.setProperty('--color-primary-800', theme.colors.primary[800])
    root.style.setProperty('--color-primary-900', theme.colors.primary[900])
    
    // Secondary colors (Gold)
    root.style.setProperty('--color-secondary-300', theme.colors.secondary[300])
    root.style.setProperty('--color-secondary-400', theme.colors.secondary[400])
    root.style.setProperty('--color-secondary-500', theme.colors.secondary[500])
    root.style.setProperty('--color-secondary-600', theme.colors.secondary[600])
    root.style.setProperty('--color-secondary-700', theme.colors.secondary[700])
    
    // Background colors
    root.style.setProperty('--color-bg-light', theme.colors.background.light)
    root.style.setProperty('--color-bg-soft', theme.colors.background.soft)
    root.style.setProperty('--color-bg-card', theme.colors.background.card)
    root.style.setProperty('--color-bg-accent', theme.colors.background.accent)
    
    // Text colors
    root.style.setProperty('--color-text-primary', theme.colors.text.primary)
    root.style.setProperty('--color-text-secondary', theme.colors.text.secondary)
    root.style.setProperty('--color-text-accent', theme.colors.text.accent)
    root.style.setProperty('--color-text-gold', theme.colors.text.gold)
    root.style.setProperty('--color-text-white', theme.colors.text.white)
    
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
