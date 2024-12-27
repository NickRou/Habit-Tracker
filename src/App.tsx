import {ThemeProvider} from "@/components/theme-provider.tsx";
import {HabitGraph} from "@/components/habit-graph.tsx";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from "@/firebase-config.ts";

function App() {
    const dates = [
        new Date('2024-12-15'),
        new Date('2024-12-16'),
        new Date('2024-12-20'),
        new Date('2024-12-25'),
        // Add more dates as needed
    ]

    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = async () => {
        await signInWithPopup(auth, provider)
    }

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="min-h-screen flex flex-col items-center py-10">
                <h1 className="text-4xl font-semibold text-white">
                    Habit Tracker
                </h1>
                <button onClick={handleGoogleSignIn}>SIGN IN</button>

                <HabitGraph dates={dates} title="Yoga" color={"green"}/>
                <HabitGraph dates={dates} title="Meditation" color={"red"}/>
                <HabitGraph dates={dates} title="Surfing" color={"purple"}/>
            </div>
        </ThemeProvider>
    );
}

export default App;
