import { useEffect, useRef, useState } from "react";
import { AXIOS } from "../../config/axios.config";
import { API_URLS } from "../../constants/api.urls";
import { TaskList } from "./TaskList";

interface ITaskManager {}
export const TaskManager: React.FC<ITaskManager> = (): JSX.Element => {
  const [state, setState] = useState<any[]>([]);

  const fetchTasks = async () => {
    const response = await AXIOS.get(API_URLS.Tasks);
    setState(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleUpdateState = (modifyState: any) => {
    setState(modifyState);
  };

  return (
    <>
      <div className="flex justify-evenly gap-5">
        {state?.map((item: any) => (
          <div className="w-3/4" key={item.id}>
            <TaskList {...item} onCompleted={handleUpdateState} />
          </div>
        ))}
      </div>
    </>
  );
};
