import { FaRegCircleCheck } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
import { axiosPublic } from "../../../api";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import {useNavigate} from 'react-router-dom'

const Task = ({ priority, taskName, taskDescription, id, status, refetch }) => {

  const navigate = useNavigate()

  // handle complete
  const handleComplete = async () => {
    const result = await axiosPublic.patch(`/status-change/${id}`, {
      status: "completed",
    });
    if (result.data.modifiedCount > 0) {
      toast.success("Status has changed to Completed");
      refetch();
    }
  };
  // handle ongoing
  const handleOngoing = async () => {
    const result = await axiosPublic.patch(`/status-change/${id}`, {
      status: "ongoing",
    });
    if (result.data.modifiedCount > 0) {
      toast.success("Status has changed to onGoing");
      refetch();
    }
  };
  // handle delete
  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axiosPublic.delete(`/delete-task/${id}`);
        if (result.data.deletedCount > 0) {
          
          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };
  // handle edit
  const handleEdit = () => {
    navigate(`/manage-tasks/your-tasks/update-task/${id}`)
  };

  return (
    <div className="relative w-[95%] mx-auto bg-white shadow-md rounded-lg px-2 py-[6px] mt-3">
      <h3 className="font-semibold text-gray-600">{taskName}</h3>
      <p className="text-sm">{taskDescription}</p>
      <p className="text-sm font-bold px-2 py-1 bg-action-bg text-white rounded-lg w-min whitespace-nowrap mt-2">
        {priority}
      </p>
      <div className="flex gap-2 absolute right-3 bottom-2">
        {status === "todo" && (
          <div className="flex gap-2 items-center">
            <span
              onClick={handleEdit}
              className="flex gap-1 items-center border rounded-lg shadow-sm cursor-pointer px-2 text-sm hover:border-action-text transition ease-linear duration-200"
            >
              <RiEditCircleLine size={16} />
              Edit
            </span>
            <span
              onClick={handleOngoing}
              className="flex gap-1 items-center border rounded-lg shadow-sm cursor-pointer px-2 text-sm hover:border-action-text transition ease-linear duration-200"
            >
              <FaRegArrowAltCircleRight size={16} />
              OnGoing
            </span>
          </div>
        )}
        {status === "ongoing" && (
          <span
            onClick={handleComplete}
            className="flex gap-1 items-center border rounded-lg shadow-sm cursor-pointer px-2 text-sm hover:border-action-text transition ease-linear duration-200"
          >
            <FaRegCircleCheck size={16} />
            Complete
          </span>
        )}
        {status === "completed" && (
          <span
            onClick={handleDelete}
            className="flex gap-1 items-center border text-red-500 rounded-lg shadow-sm cursor-pointer px-2 hover:border-red-700 transition ease-linear duration-200 text-sm"
          >
            <TiDeleteOutline size={16} className="" />
            Delete
          </span>
        )}
      </div>
    </div>
  );
};

export default Task;
