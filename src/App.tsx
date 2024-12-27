import "./App.css";
import HabitCard from "./components/HabitCard/HabitCard.tsx";

function App() {

    return (
        <>
            <h1>Habit Tracker</h1>
            <HabitCard title="Walking" description="Days I Walked" />
            <HabitCard title="Yoga" description="Days I Did Yoga" />
        </>
    );
}

export default App;
