import Task from './Task';

type TasksState = {
  tasks: Task[];
  error?: string;
};

export default TasksState;
