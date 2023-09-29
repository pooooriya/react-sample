import { TaskItem } from "./TaskItem";
import { BiMessageSquareAdd } from "react-icons/bi";
import { TaskModal } from "./TaskModal";
import { useContext, useRef } from "react";
import { AXIOS } from "../../../config/axios.config";
import * as uuid from "uuid";

interface ITaskList {
  title?: string;
  items?: any[];
  id: number;
  onCompleted: (state: any) => void;
}
export const TaskList: React.FC<ITaskList> = ({
  title,
  items,
  id,
  onCompleted,
}): JSX.Element => {
  // const { setState } = useContext(AppContext);

  const ref = useRef<any>();

  const handleShowModal = () => {
    ref.current.showModal();
  };

  const handleCloseModal = () => {
    ref.current.close();
  };

  const handleAddTask = async (data: any) => {
    // 1. update data in server
    // get tasks
    const request = await AXIOS.get(`/tasks`);
    const tasks = request.data;

    // add tasks
    const currentTask = tasks.find((x: any) => x.id === id);
    currentTask?.items?.push({ id: uuid.v4(), title: data.title });

    // update data into server
    await AXIOS.put(`/tasks/${id}`, currentTask);

    // 2. update state
    // setState(tasks);

    // 3. close modal
    handleCloseModal();
  };

  const handleRemoveItem = async (selectedId: number) => {
    // 1. update data in server
    // get tasks
    const request = await AXIOS.get(`/tasks`);
    const tasks = request.data;

    // remove task
    const currentTask = tasks.find((x: any) => x.id === id);
    currentTask.items = currentTask?.items?.filter(
      (x: any) => x.id !== selectedId
    );

    // update data into server
    await AXIOS.put(`/tasks/${id}`, currentTask);

    // 2. update state
    // setState(tasks);

    // 3. close modal
    handleCloseModal();
  };

  return (
    <div className="bg-gray-100 px-5 py-3 rounded shadow-sm">
      <TaskModal
        ref={ref}
        onCompleted={handleAddTask}
        onClose={handleCloseModal}
      />
      <div className="flex justify-between items-center">
        {title && <h2 className="font-medium">{title}</h2>}
        <button onClick={handleShowModal} className="btn btn-primary btn-xs">
          اضافه کردن
          <BiMessageSquareAdd />
        </button>
      </div>
      <ul className="mt-5 [&>li]:my-2">
        {items?.map((item) => (
          <TaskItem key={item.id} {...item} onRemove={handleRemoveItem} />
        ))}
      </ul>
    </div>
  );
};
