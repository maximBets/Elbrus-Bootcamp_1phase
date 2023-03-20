import TasksState from './types/TasksState';
import TasksAction from './types/TasksAction';

const initialState: TasksState = {
  tasks: [],
};

const tasksReducer = (
  state: TasksState = initialState,
  action: TasksAction
): TasksState => {
  switch (action.type) {
    case 'tasks/addTaskSuccess': {
      const task = action.payload;
      return { ...state, tasks: [task, ...state.tasks] };
    }

    case 'tasks/addTaskFailure': {
      const { error } = action;
      return { ...state, error };
    }

    case 'tasks/resetValidation': {
      return { ...state, error: undefined };
    }

    case 'tasks/tasksLoaded': {
      return { ...state, tasks: action.payload };
    }

    case 'tasks/taskUpdated': {
      const newTask = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task) => (task.id === newTask.id ? newTask : task)),
      };
    }

    case 'tasks/taskDeleted': {
      const taskId = action.payload;
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== taskId),
      };
    }

    default:
      return state;
  }
};

export default tasksReducer;
