"use client"

import { cn } from "@/lib/utils"

interface HabitGraphProps {
    dates: Date[]
    title: string
    color: keyof typeof colorVariants | keyof typeof borderColorVariants
}

const borderColorVariants = {
    blue: 'border-blue-500',
    red: 'border-red-500',
    green: 'border-green-500',
    yellow: 'border-yellow-500',
    purple: 'border-purple-500',
}

const colorVariants = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500',
}

export function HabitGraph({ dates, title, color }: HabitGraphProps) {
    const currentYear = new Date().getFullYear()
    const startDate = new Date(currentYear, 0, 1)
    const endDate = new Date(currentYear, 11, 31)

    const isDateChecked = (date: Date) => {
        return dates.some(d =>
            d.getFullYear() === date.getFullYear() &&
            d.getMonth() === date.getMonth() &&
            d.getDate() === date.getDate()
        )
    }

    const weeks = []
    const currentDate = new Date(startDate)

    for (let week = 0; week < 53; week++) {
        const weekDates = []
        for (let day = 0; day < 7; day++) {
            if (currentDate <= endDate) {
                weekDates.push(new Date(currentDate))
            }
            currentDate.setDate(currentDate.getDate() + 1)
        }
        weeks.push(weekDates)
    }

    return (
        <div className="inline-flex flex-col gap-2 p-5">
            <h2 className="text-2xl font-semibold text-left py-2">{title}</h2>
            <div className={`flex gap-2 rounded border-2 p-2 ${borderColorVariants[color]}`}>
                <div className="flex gap-1">
                    {weeks.map((week, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-1">
                            {week.map((date, dayIndex) => (
                                <div
                                    key={dayIndex}
                                    className={cn(
                                        "h-2 w-2 rounded-sm",
                                        isDateChecked(date)
                                            ? `${colorVariants[color]}`
                                            : "bg-muted",
                                    )}
                                    role="gridcell"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

