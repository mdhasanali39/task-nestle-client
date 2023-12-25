import { useForm } from "react-hook-form";
import { FaLeftLong } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { axiosPublic } from "../../../api";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const UpdateTask = () => {
  const { data: task } = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();

  //   console.log(task);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const acknowledge = await axiosPublic.put(`/update-task/${task?._id}`, {
      ...data,
      status: task?.status,
      email: user?.email,
    });
    if (acknowledge.data.modifiedCount > 0) {
      toast.success("Your task Updated");
      navigate("/manage-tasks/your-tasks", { replace: true });
    }
  };

  return (
    <>
      <div className="my-10">
        <h2 className="text-4xl text-center font-bold">
          Update your task
          <span className="text-action-text"> {task?.taskName}</span>{" "}
        </h2>
      </div>
      <div className=" w-3/4 lg:w-1/4 bg-white mt-1 p-4 pt-12 fixed z-[100] shadow-xl rounded-lg border-t-[5px] border-t-action-text left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          {/* task name  */}
          <input
            type="text"
            placeholder="Task Name"
            {...register("taskName")}
            defaultValue={task?.taskName}
            required
            className="px-2 py-2 outline-none border rounded-md"
          />

          {/* task deadline */}
          <input
            type="datetime-local"
            {...register("taskDeadline")}
            defaultValue={task?.taskDeadline}
            required
            className="px-2 py-2 outline-none border rounded-md"
          />
          {/* task priority */}
          <select {...register("priority")} defaultValue={task?.priority}>
            <option>select</option>
            <option value="high">High</option>
            <option value="moderate">Moderate</option>
            <option value="low">Low</option>
          </select>
          {/* task description */}
          <textarea
            type="text"
            placeholder="Task Description"
            {...register("taskDescription")}
            defaultValue={task?.taskDescription}
            className="px-2 py-2 outline-none border rounded-md"
          ></textarea>
          <div className="text-center py-4">
            <button
              type="submit"
              className="text-lg text-white font-semibold px-5 py-1 rounded-lg bg-action-bg border hover:bg-white hover:text-black hover:border-action-text transition ease-linear duration-300"
            >
              Update
            </button>
          </div>
        </form>
        <span
          onClick={() => navigate("/manage-tasks/your-tasks")}
          className="absolute top-1 right-1 flex gap-2 items-center text-lg cursor-pointer"
        >
          <FaLeftLong size={28} />
          Back
        </span>
      </div>
    </>
  );
};

export default UpdateTask;
