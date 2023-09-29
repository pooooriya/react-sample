import { useEffect } from "react";
import { AXIOS } from "../../config/axios.config";
import { API_URLS } from "../../constants/api.urls";
import { TaskList } from "./TaskList";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { AllTasksRecieved } from "../../redux/features/task.slice";

interface ITaskManager {}
export const TaskManager: React.FC<ITaskManager> = (): JSX.Element => {
  const state = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const fetchTasks = async () => {
    const response = await AXIOS.get(API_URLS.Tasks);
    dispatch(AllTasksRecieved(response.data));
  };
  console.log(state);

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
