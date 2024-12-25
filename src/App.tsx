import { useState } from "react";
import "./App.css";
import CalendarView from "./components/CalendarView/CalendarView";

function App() {
    const [count, setCount] = useState(0);

    const sampleDates = [
        "2024-01-15",
        "2024-02-28",
        "2024-03-10",
        "2024-04-05",
        "2024-05-20",
        "2024-06-30",
        "2024-07-04",
        "2024-08-18",
        "2024-09-22",
        "2024-10-31",
        "2024-11-15",
        "2024-12-25",
    ];

    return (
        <>
            <h1>Habit Tracker</h1>
            <CalendarView dates={sampleDates} />
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
