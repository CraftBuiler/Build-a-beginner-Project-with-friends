import { DropdownMenuDemo } from "./components/drop-down-menu-example";
import { ModeToggle } from "./components/mode-toogle";
import { ThemeProvider } from "./context/themeProvider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark">
        <ModeToggle />
        <DropdownMenuDemo />
      </ThemeProvider>
    </>
  );
}

export default App;
