import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return [theme, toggle]
}
