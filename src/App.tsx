import { ThemeProvider } from './context/themeProvider'

function App() {
    return (
        <>
            <ThemeProvider
                defaultTheme="dark"
                storageKey="vite-ui-theme"
            ></ThemeProvider>
        </>
    )
}

export default App
