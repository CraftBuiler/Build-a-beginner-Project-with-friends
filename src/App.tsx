import { DropdownMenuDemo } from './components/drop-down-menu-example'
import { ModeToggle } from './components/mode-toogle'
import { Card, CardContent } from '@/components/ui/card'
import { ThemeProvider } from './context/themeProvider'
import { Post } from '@/components/Post/Post'

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <ModeToggle />
                <DropdownMenuDemo />
                <Card>
                    <CardContent>
                        <Post />
                    </CardContent>
                </Card>
            </ThemeProvider>
        </>
    )
}

export default App
