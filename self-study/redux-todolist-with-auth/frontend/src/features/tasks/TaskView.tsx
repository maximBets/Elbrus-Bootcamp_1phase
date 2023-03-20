import React from 'react';
import Task, { TaskId } from './types/Task';

function TaskView({
  task,
  onChange,
  onRemove,
}: {
  task: Task;
  onChange: (task: Task) => void;
  onRemove: (taskId: TaskId) => void;
}): JSX.Element {
  const handleChange = (event: React.FormEvent): void => {
    const done = (event.target as HTMLInputElement).checked;
    const newTask = { ...task, done };
    onChange(newTask);
  };

  const handleRemove = (event: React.MouseEvent): void => {
    event.stopPropagation();
    event.preventDefault();
    onRemove(task.id);
  };

  return (
    <label className="list-group-item d-flex justify-content-between align-items-center task">
      {/* Чекбокс для редактирования задачи (выполнено, не выполнено) */}
      <input
        type="checkbox"
        className="form-check-input me-1 done-checkbox"
        checked={task.done}
        onChange={handleChange}
      />

      {task.title}

      <span
        className="badge bg-danger rounded-pill remove-task"
        role="button"
        onClick={handleRemove}
        tabIndex={0}
      >
        удалить
      </span>
    </label>
  );
}

export default TaskView;
