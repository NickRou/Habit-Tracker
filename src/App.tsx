import {ThemeProvider} from "@/components/theme-provider.tsx";
import {HabitGraph} from "@/components/habit-graph.tsx";

function App() {

    const dates = [
        new Date('2024-12-15'),
        new Date('2024-12-16'),
        new Date('2024-12-20'),
        new Date('2024-12-25'),
        // Add more dates as needed
    ]

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="min-h-screen flex flex-col items-center py-10">
                <h1 className="text-4xl font-semibold text-white">
                    Habit Tracker
                </h1>
                <HabitGraph dates={dates} title="Yoga" color={"green"}/>
                <HabitGraph dates={dates} title="Meditation" color={"red"}/>
                <HabitGraph dates={dates} title="Surfing" color={"purple"}/>
            </div>
        </ThemeProvider>
    );
}

export default App;
