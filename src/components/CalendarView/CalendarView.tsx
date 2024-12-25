import React, { useMemo } from "react";
import "./CalendarView.css";

interface CalendarViewProps {
    dates: string[]; // Array of dates in 'YYYY-MM-DD' format
}

const CalendarView: React.FC<CalendarViewProps> = ({ dates }) => {
    const checkedDates = useMemo(() => {
        return new Set(dates.map((date) => new Date(date).toDateString()));
    }, [dates]);

    const weeks = useMemo(() => {
        const year = new Date().getFullYear();
        const startDate = new Date(year, 0, 1);
        const endDate = new Date(year, 11, 31);
        const weeks = [];
        const currentDate = new Date(startDate);
        let week = [];

        while (currentDate <= endDate) {
            if (week.length === 7) {
                weeks.push(week);
                week = [];
            }

            week.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        if (week.length > 0) {
            weeks.push(week);
        }

        return weeks;
    }, []);

    const getClassName = (date: Date) => {
        if (checkedDates.has(date.toDateString())) {
            return "cell cell-active";
        }
        return "cell";
    };

    return (
        <div className="habit-graph">
            <div className="graph">
                {weeks.map((week, weekIndex) => (
                    <React.Fragment key={weekIndex}>
                        {week.map((day, dayIndex) => (
                            <div
                                key={day.toISOString()}
                                className={getClassName(day)}
                                style={{
                                    gridColumn: weekIndex + 1,
                                    gridRow: dayIndex + 2,
                                }}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CalendarView;
