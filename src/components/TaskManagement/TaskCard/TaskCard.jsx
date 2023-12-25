import { MdOutlineAddTask } from "react-icons/md";
import CreateTask from "../CreateTask/CreateTask";
import Task from "./Task";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { axiosPublic } from "../../../api";
import toast from "react-hot-toast";

const TaskCard = ({ sectionName, tasks, refetch, isCreateTask }) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [addIconClicked, setAddIconClicked] = useState(false);
  const [isStatusEqual, setIsStatusEqual] = useState(false)

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => changeTaskStatus(item.id, item.status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  console.log("Overing", isOver);

  // handle show create task section
  const handleShowCreateTask = () => {
    setAddIconClicked(true);
  };

  const changeTaskStatus = async (id, status) => {
    console.log("dropped", id, status);
    if (status === sectionName.toLowerCase()) {
      // toast.error("Status not changed")
      setIsStatusEqual(true)
    }else{
      const result = await axiosPublic.patch(`/status-change/${id}`, {
        status: sectionName.toLowerCase(),
      });
      if (result.data.modifiedCount > 0) {
        toast.success(`Status changed to ${sectionName.toLowerCase()}`);
        refetch()
      }
      setIsStatusEqual(false)
    }
  };

  return (
    <div>
      <h3 className="text-xl text-gray-600 font-bold my-4">{sectionName}</h3>
      <div
        ref={drop}
        className={`relative min-h-[200px] bg-primary-bg rounded-lg shadow-xl border border-action-text border-opacity-10 pb-14 ${
          isOver &&(
            !isStatusEqual ? "bg-green-200": ""
          )
        }`}
      >
        {/* show tasks  */}
        {tasks.length > 0 ? (
          tasks.map(({ taskName, priority, taskDescription, _id, status }) => (
            <Task
              key={_id}
              taskDescription={taskDescription}
              taskName={taskName}
              priority={priority}
              id={_id}
              status={status}
              refetch={refetch}
            />
          ))
        ) : (
          <div className="w-[95%] mx-auto bg-white shadow-md rounded-lg px-2 py-[6px] mt-3">
            You don't have {sectionName} tasks!
          </div>
        )}

        {isCreateTask && (
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
        {isCreateTask && addIconClicked && (
          <CreateTask refetch={refetch} setAddIconClicked={setAddIconClicked} />
        )}
      </div>
    </div>
  );
};

export default TaskCard;
