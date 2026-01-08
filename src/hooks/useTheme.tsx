import { useContext } from 'react'
import { ThemeProviderContext } from '../const/theme'

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)
    return context
}
