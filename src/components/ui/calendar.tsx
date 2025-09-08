import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarEvent {
  id: string;
  title: string;
  color: string;
  date: Date;
}

interface SidebarEvent {
  id: string;
  title: string;
  color: string;
  dotColor: string;
}

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [draggedEvent, setDraggedEvent] = useState<SidebarEvent | null>(null);

  const getMonthDays = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days: Date[] = [];
    const startDay = firstDay.getDay();

    // Previous month padding
    for (let i = 0; i < startDay; i++) {
      days.push(new Date(year, month, -startDay + i + 1));
    }

    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    // Next month padding
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i));
    }

    return days;
  };

  const navigateMonth = (offset: number): void => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1)
    );
  };

  const navigateYear = (offset: number): void => {
    setCurrentDate(
      new Date(currentDate.getFullYear() + offset, currentDate.getMonth(), 1)
    );
  };

  const goToToday = (): void => setCurrentDate(new Date());

  const addEvent = (date: Date): void => {
    if (!draggedEvent) return;
    const newEvent: CalendarEvent = {
      id: Date.now().toString(),
      title: draggedEvent.title,
      color: draggedEvent.color,
      date: date,
    };
    setEvents([...events, newEvent]);
    setDraggedEvent(null);
  };

  const handleDragStart = (event: SidebarEvent): void => {
    setDraggedEvent(event);
  };

  const days = getMonthDays(currentDate);

  const sidebarEvents: SidebarEvent[] = [
    { id: "1", title: "Programming", color: "bg-blue-500", dotColor: "bg-blue-500" },
    { id: "2", title: "Marketing", color: "bg-green-500", dotColor: "bg-green-500" },
    { id: "3", title: "Meeting", color: "bg-yellow-500", dotColor: "bg-yellow-500" },
    { id: "4", title: "Other", color: "bg-purple-500", dotColor: "bg-purple-500" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
      {/* Sidebar */}
      <div className="w-64 p-6 border-r border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-xl font-bold mb-6">Events</h2>

        <div className="space-y-2">
          {sidebarEvents.map((event) => (
            <div
              key={event.id}
              draggable
              onDragStart={() => handleDragStart(event)}
              className={`p-3 rounded-lg cursor-move ${event.color} text-white shadow-sm`}
            >
              {event.title}
            </div>
          ))}
        </div>
      </div>

      {/* Main Calendar */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:opacity-80"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => navigateYear(-1)}
              className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:opacity-80"
            >
              Prev Year
            </button>
            <button
              onClick={goToToday}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Today
            </button>
            <button
              onClick={() => navigateMonth(1)}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:opacity-80"
            >
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => navigateYear(1)}
              className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:opacity-80"
            >
              Next Year
            </button>
          </div>
          <h2 className="text-2xl font-bold">
            {currentDate.toLocaleString("en-US", { month: "long", year: "numeric" })}
          </h2>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="p-2 font-medium text-center text-gray-600 dark:text-gray-400">
              {day}
            </div>
          ))}
          {days.map((date, idx) => {
            const dayEvents = events.filter(
              (event) => event.date.toDateString() === date.toDateString()
            );
            const isCurrentMonth = date.getMonth() === currentDate.getMonth();
            const isToday = date.toDateString() === new Date().toDateString();

            return (
              <div
                key={idx}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => addEvent(date)}
                className={`min-h-24 p-2 border rounded-lg transition-colors ${
                  isCurrentMonth
                    ? "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    : "bg-gray-100 dark:bg-gray-700 opacity-50"
                } ${isToday ? "ring-2 ring-blue-500" : ""}`}
              >
                <div className="font-medium mb-1">{date.getDate()}</div>
                <div className="space-y-1">
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`p-1 rounded text-xs ${event.color} text-white`}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
