import { useContext, useEffect } from "react";
import { AXIOS } from "../../config/axios.config";
import { API_URLS } from "../../constants/api.urls";
import { TaskList } from "./TaskList";
import { AppContext } from "../../context/store";
import { TaskActions } from "../../context/actions/tasks.actions";

interface ITaskManager {}
export const TaskManager: React.FC<ITaskManager> = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);

  const fetchTasks = async () => {
    const response = await AXIOS.get(API_URLS.Tasks);
    dispatch({
      type: TaskActions.ALL_ACTIONS_RECEIVED,
      payload: response.data,
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <div className="flex justify-evenly gap-5">
        {state?.map((item: any) => (
          <div className="w-3/4" key={item.id}>
            <TaskList {...item} />
          </div>
        ))}
      </div>
    </>
  );
};
