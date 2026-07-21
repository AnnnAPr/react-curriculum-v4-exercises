import { useState } from 'react';
import UserProfile from '../../components/UserProfile';
import FilterButtonGroup from '../../components/FilterButtonGroup';
import TaskItem from '../../components/TaskItem';
import useTasks from '../../hooks/useTasks';
import { getFilteredTasks } from '../../utils/utils';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useTasks();

  const visibleTasks = getFilteredTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />
      <div>
        <FilterButtonGroup onFilterChange={setFilter} />
        <p>Current filter: {filter}</p>
      </div>

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
