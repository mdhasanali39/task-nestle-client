import { useEffect, useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../../api";
import useAuth from "../../../hooks/useAuth";
import { Grid } from "react-loader-spinner";

const YourTasks = () => {
  const [todo, setTodo] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);

  const { user } = useAuth();

  const {
    data: tasks = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/get-tasks/${user?.email}`);
      return data;
    },
  });

  useEffect(() => {
    const fTodo = tasks.filter((t) => t.status === "todo");
    const fOngoing = tasks.filter((t) => t.status === "ongoing");
    const fCompleted = tasks.filter((t) => t.status === "completed");

    if (
      !arraysAreEqual(fTodo, todo) ||
      !arraysAreEqual(fOngoing, ongoing) ||
      !arraysAreEqual(fCompleted, completed)
    ) {
      setTodo(fTodo);
      setOngoing(fOngoing);
      setCompleted(fCompleted);
    }
  }, [tasks, todo, ongoing, completed]);

  const arraysAreEqual = (arr1, arr2) => {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  };
  // console.log(tasks);

  return (
    <>
      {isLoading ? (
        <div className="min-h-[86vh] flex justify-center items-center"><span className=""> <Grid
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
            /></span></div>
      ) : (<div className="relative grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* todo lists */}

      <TaskCard sectionName="Todo" isCreateTask={true} tasks={todo} refetch={refetch} />

      {/* ongoing lists  */}

      <TaskCard sectionName="OnGoing" tasks={ongoing} refetch={refetch} />

      {/* completed lists  */}
      <TaskCard sectionName="Completed" tasks={completed} refetch={refetch} />
    </div>)}
    </>
    
  );
};

export default YourTasks;
