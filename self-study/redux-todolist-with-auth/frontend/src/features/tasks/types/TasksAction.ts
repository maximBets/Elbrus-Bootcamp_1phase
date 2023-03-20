import Task, { TaskId } from './Task';

type TasksAction =
  | { type: 'tasks/addTaskSuccess'; payload: Task }
  | { type: 'tasks/addTaskFailure'; error: string }
  | { type: 'tasks/resetValidation' }
  | { type: 'tasks/tasksLoaded'; payload: Task[] }
  | { type: 'tasks/taskUpdated'; payload: Task }
  | { type: 'tasks/taskDeleted'; payload: TaskId };

export default TasksAction;
