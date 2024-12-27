import {ThemeProvider} from "@/components/theme-provider.tsx";

function App() {

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {/*<ModeToggle/>*/}
            <div></div>
        </ThemeProvider>
    );
}

export default App;
