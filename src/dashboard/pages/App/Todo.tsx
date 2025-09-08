import React, { useState } from "react";
import { Search, Plus } from "lucide-react";

interface Task {
  id: string;
  name: string;
  createdDate: string;
  dueDate: string;
  assigned: {
    name: string;
    avatar: string;
  };
  completed: boolean;
}

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      name: "Review system logs for any reported errors",
      createdDate: "Tue Apr 23 2024 12:00:00 AM",
      dueDate: "Tue Apr 30 2024",
      assigned: { name: "Anna M. Hines", avatar: "👩‍💼" },
      completed: false,
    },
    {
      id: "2",
      name: "Conduct user testing to identify potential bugs",
      createdDate: "Tue May 14 2024 12:00:00 AM",
      dueDate: "Sun Aug 25 2024",
      assigned: { name: "Candice F. Gilmore", avatar: "👩‍💻" },
      completed: false,
    },
    {
      id: "3",
      name: "Gather feedback from stakeholders regarding any issues",
      createdDate: "Fri Apr 12 2024 12:00:00 AM",
      dueDate: "Sun Apr 28 2024",
      assigned: { name: "Vanessa R. Davis", avatar: "👩‍🎨" },
      completed: false,
    },
    {
      id: "4",
      name: "Prioritize bugs based on severity and impact",
      createdDate: "Wed Apr 10 2024 12:00:00 AM",
      dueDate: "Mon Apr 15 2024",
      assigned: { name: "Judith H. Fritsche", avatar: "👨‍💼" },
      completed: true,
    },
    {
      id: "5",
      name: "Investigate and analyze the root cause of each bug",
      createdDate: "Wed May 22 2024 12:00:00 AM",
      dueDate: "Fri Jul 05 2024",
      assigned: { name: "Peter T. Smith", avatar: "👨‍💻" },
      completed: false,
    },
    {
      id: "6",
      name: "Develop and implement fixes for the identified bugs",
      createdDate: "Sat May 18 2024 12:00:00 AM",
      dueDate: "Tue Apr 30 2024",
      assigned: { name: "Emmanuel J. Delcid", avatar: "👨‍🔬" },
      completed: true,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [newTask, setNewTask] = useState({
    name: "",
    dueDate: "",
    assigned: { name: "", avatar: "👤" },
  });

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const createTask = () => {
    if (!newTask.name.trim()) return;

    const task: Task = {
      id: Date.now().toString(),
      name: newTask.name,
      createdDate: new Date().toDateString() + " 12:00:00 AM",
      dueDate: newTask.dueDate || "No due date",
      assigned: {
        name: newTask.assigned.name || "Unassigned",
        avatar: newTask.assigned.avatar,
      },
      completed: false,
    };

    setTasks([task, ...tasks]);
    setNewTask({ name: "", dueDate: "", assigned: { name: "", avatar: "👤" } });
    setShowCreateTask(false);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold">Todo</h1>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Apps › Todo
          </div>
        </div>
        <button
          onClick={() => setShowCreateTask(true)}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Create Task</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search task..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg pl-10 pr-4 py-2 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Task Table Header */}
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
        <div className="grid grid-cols-12 gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
          <div className="col-span-5">Task Name</div>
          <div className="col-span-3">Created Date</div>
          <div className="col-span-2">Due Date</div>
          <div className="col-span-2">Assigned</div>
        </div>
      </div>

      {/* Task List */}
      <div className="px-6">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`grid grid-cols-12 gap-4 py-4 border-b border-slate-200 dark:border-slate-700 items-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
              task.completed ? "opacity-60" : ""
            }`}
          >
            <div className="col-span-5 flex items-center space-x-3">
              <button
                onClick={() => toggleTask(task.id)}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  task.completed
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "border-slate-400 dark:border-slate-500 hover:border-blue-500"
                }`}
              >
                {task.completed && <span className="text-xs">✓</span>}
              </button>
              <span
                className={`${
                  task.completed ? "line-through text-slate-400" : ""
                }`}
              >
                {task.name}
              </span>
            </div>
            <div className="col-span-3 text-slate-500 dark:text-slate-400 text-sm">
              {task.createdDate}
            </div>
            <div className="col-span-2 text-slate-500 dark:text-slate-400 text-sm">
              {task.dueDate}
            </div>
            <div className="col-span-2 flex items-center space-x-2">
              <span className="text-xl">{task.assigned.avatar}</span>
              <span className="text-sm text-slate-700 dark:text-slate-300">
                {task.assigned.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Create Task Modal */}
      {showCreateTask && (
        <div className="fixed inset-0 bg-black/40 dark:bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-lg p-6 w-full max-w-md mx-4 shadow-xl">
            <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
              Create New Task
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                  Task Name
                </label>
                <input
                  type="text"
                  value={newTask.name}
                  onChange={(e) =>
                    setNewTask({ ...newTask, name: e.target.value })
                  }
                  className="w-full bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter task name..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                  Due Date
                </label>
                <input
                  type="text"
                  value={newTask.dueDate}
                  onChange={(e) =>
                    setNewTask({ ...newTask, dueDate: e.target.value })
                  }
                  className="w-full bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Mon Jan 15 2024"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                  Assigned To
                </label>
                <input
                  type="text"
                  value={newTask.assigned.name}
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      assigned: { ...newTask.assigned, name: e.target.value },
                    })
                  }
                  className="w-full bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter assignee name..."
                />
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={createTask}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Create Task
              </button>
              <button
                onClick={() => setShowCreateTask(false)}
                className="flex-1 bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-4 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
