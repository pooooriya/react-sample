import { TaskActions } from "../actions/tasks.actions";
import { AppAction } from "../types/context.types";

export const TaskReducer = (
  state: any[],
  action: AppAction<TaskActions>
): any[] => {
  switch (action.type) {
    case TaskActions.ALL_ACTIONS_RECEIVED:
    case TaskActions.TASK_ADDED:
    case TaskActions.TASK_REMOVED:
      return action.payload;
    default:
      return state;
  }
};
