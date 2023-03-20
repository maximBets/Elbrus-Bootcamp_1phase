import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskView from './TaskView';
import * as api from './api';
import Task, { TaskId } from './types/Task';
import styles from './styles.module.css';
import { RootState } from '../../store';

function TasksList(): JSX.Element {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const error = useSelector((state: RootState) => state.tasks.error);
  const dispatch = useDispatch();
  const [newTaskText, setNewTaskText] = React.useState('');

  useEffect(() => {
    api.getTasks().then((loadedTasks) => {
      dispatch({
        type: 'tasks/tasksLoaded',
        payload: loadedTasks,
      });
    });
  }, [dispatch]);

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    api
      .createTask(newTaskText)
      .then((task) => {
        dispatch({
          type: 'tasks/addTaskSuccess',
          payload: task,
        });
        setNewTaskText('');
      })
      .catch((createTaskError) => {
        dispatch({
          type: 'tasks/addTaskFailure',
          error: createTaskError,
        });
      });
  };

  const handleTaskChange = (newTask: Task): void => {
    api.updateTask(newTask).then(() => {
      dispatch({
        type: 'tasks/taskUpdated',
        payload: newTask,
      });
    });
  };

  const handleTaskRemove = (id: TaskId): void => {
    api.deleteTask(id).then(() => {
      dispatch({
        type: 'tasks/taskDeleted',
        payload: id,
      });
    });
  };

  const handleNewTaskTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTaskText(event.target.value);
    dispatch({ type: 'tasks/resetValidation' });
  };

  return (
    <>
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className={`form-control ${error ? 'is-invalid' : ''}`}
            placeholder="Добавьте задачу..."
            aria-label="Добавьте задачу..."
            name="taskTitle"
            value={newTaskText}
            onChange={handleNewTaskTextChange}
          />
          <button type="submit" className="btn btn-primary">
            добавить
          </button>
        </div>
        {error && (
          <div className="invalid-feedback text-end" style={{ display: 'block' }}>
            {error}
          </div>
        )}
      </form>

      <div className={`${styles.tasks} list-group`}>
        {tasks.map((task) => (
          <TaskView
            key={task.id}
            task={task}
            onChange={handleTaskChange}
            onRemove={handleTaskRemove}
          />
        ))}
      </div>
    </>
  );
}

export default TasksList;
