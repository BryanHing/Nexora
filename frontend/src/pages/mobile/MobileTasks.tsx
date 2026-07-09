import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { MobileHeader } from '@components/mobile/MobileHeader';
import { MobileContainer } from '@components/mobile/MobileContainer';
import { MobileCard, MobileCardBody, MobileCardHeader } from '@components/mobile/MobileCard';
import { MobileButton } from '@components/mobile/MobileButton';

export const MobileTasks: React.FC = () => {
  const [tasks, setTasks] = React.useState([
    { id: 1, title: 'Task 1', status: 'todo' },
    { id: 2, title: 'Task 2', status: 'in-progress' },
    { id: 3, title: 'Task 3', status: 'completed' },
  ]);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t) =>
        t.id === id
          ? { ...t, status: t.status === 'completed' ? 'todo' : 'completed' }
          : t
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const tasksByStatus = {
    todo: tasks.filter((t) => t.status === 'todo'),
    'in-progress': tasks.filter((t) => t.status === 'in-progress'),
    completed: tasks.filter((t) => t.status === 'completed'),
  };

  return (
    <>
      <MobileHeader
        title="Tasks"
        rightContent={<MobileButton size="sm"><Plus className="w-5 h-5" /></MobileButton>}
      />
      <MobileContainer>
        {/* Todo */}
        <MobileCard>
          <MobileCardHeader>To Do ({tasksByStatus.todo.length})</MobileCardHeader>
          <MobileCardBody>
            <div className="space-y-2">
              {tasksByStatus.todo.map((task) => (
                <div key={task.id} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                  <input
                    type="checkbox"
                    checked={false}
                    onChange={() => toggleTask(task.id)}
                    className="w-5 h-5 rounded cursor-pointer"
                  />
                  <span className="flex-1 text-sm text-slate-900 dark:text-white">{task.title}</span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </MobileCardBody>
        </MobileCard>

        {/* In Progress */}
        <MobileCard>
          <MobileCardHeader>In Progress ({tasksByStatus['in-progress'].length})</MobileCardHeader>
          <MobileCardBody>
            <div className="space-y-2">
              {tasksByStatus['in-progress'].map((task) => (
                <div key={task.id} className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg border border-yellow-200 dark:border-yellow-900/30">
                  <input
                    type="checkbox"
                    checked={false}
                    onChange={() => toggleTask(task.id)}
                    className="w-5 h-5 rounded cursor-pointer"
                  />
                  <span className="flex-1 text-sm text-slate-900 dark:text-white">{task.title}</span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </MobileCardBody>
        </MobileCard>

        {/* Completed */}
        <MobileCard>
          <MobileCardHeader>Completed ({tasksByStatus.completed.length})</MobileCardHeader>
          <MobileCardBody>
            <div className="space-y-2">
              {tasksByStatus.completed.map((task) => (
                <div key={task.id} className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-900/30">
                  <input
                    type="checkbox"
                    checked={true}
                    onChange={() => toggleTask(task.id)}
                    className="w-5 h-5 rounded cursor-pointer"
                  />
                  <span className="flex-1 text-sm text-slate-900 dark:text-white line-through">{task.title}</span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </MobileCardBody>
        </MobileCard>
      </MobileContainer>
    </>
  );
};
