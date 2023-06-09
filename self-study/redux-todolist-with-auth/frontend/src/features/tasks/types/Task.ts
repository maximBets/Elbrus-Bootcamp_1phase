type Task = {
  id: number;
  user_id: number;
  title: string;
  done: boolean;
};

export type TaskId = Task['id'];

export default Task;
