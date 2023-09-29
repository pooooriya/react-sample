import { CiCircleRemove } from "react-icons/ci";

interface ITaskItem {
  title: string;
  onRemove: (id: number) => void;
  id: number;
}
export const TaskItem: React.FC<ITaskItem> = ({
  title,
  id,
  onRemove,
}): JSX.Element => {
  return (
    <li className="cursor-pointer flex justify-between items-center border-2 border-gray-300 rounded-lg p-2">
      <h3>{title}</h3>
      <div>
        <CiCircleRemove onClick={() => onRemove(id)} />
      </div>
    </li>
  );
};
