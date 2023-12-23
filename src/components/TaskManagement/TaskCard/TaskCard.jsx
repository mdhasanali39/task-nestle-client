import { MdOutlineAddTask } from "react-icons/md";
import CreateTask from "../CreateTask/CreateTask";
import Task from "./Task";
import { useState } from "react";

const TaskCard = ({ sectionName, tasks, refetch, isLoading }) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [addIconClicked, setAddIconClicked] = useState(false);

  // handle show create task section
  const handleShowCreateTask = () => {
    setAddIconClicked(true);
  };

  return (
    <div>
      <h3 className="text-xl text-gray-600 font-bold my-4">{sectionName}</h3>
      <div className="relative min-h-[200px] bg-primary-bg rounded-lg shadow-xl border border-action-text border-opacity-10 pb-14">

          
          {tasks &&
            tasks.map(({ taskName, priority, taskDescription, _id,status }) => (
              <Task
                key={_id}
                taskDescription={taskDescription}
                taskName={taskName}
                priority={priority}
                id={_id}
                status={status}
                refetch={refetch}
              />
            ))}

        {sectionName === "todo" && (
          <div className="px-2 py-1  w-min whitespace-nowrap rounded-lg  font-bold absolute bottom-2 right-2">
            <MdOutlineAddTask
              size={24}
              onClick={handleShowCreateTask}
              onMouseEnter={() => setIsMouseEntered(true)}
              onMouseLeave={() => setIsMouseEntered(false)}
            />
            <span
              className={`${
                isMouseEntered ? "opacity-100" : "opacity-0"
              } absolute -bottom-[100%] right-0 z-[100] text-action-text bg-primary-bg border px-3 rounded-md transition-opacity ease-linear duration-200`}
            >
              Create new task
            </span>
          </div>
        )}
        {sectionName === "todo" && addIconClicked && (
          <CreateTask refetch={refetch} setAddIconClicked={setAddIconClicked} />
        )}
      </div>
    </div>
  );
};

export default TaskCard;
