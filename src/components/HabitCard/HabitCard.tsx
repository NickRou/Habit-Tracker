import React from "react";
import CalendarView from "../CalendarView/CalendarView.tsx";
import "./HabitCard.css";

interface HabitCardProps {
    title: string;
    description: string;
}

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


const HabitCard: React.FC<HabitCardProps> = ({title, description}) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
            <div className="card-content">
                <div className="card-calendar-container">
                    <CalendarView dates={sampleDates} />
                </div>
            </div>
        </div>
    );
}

export default HabitCard