import { useEffect, useState } from "react";
import CreateTask from "../CreateTask/CreateTask";
import { MdOutlineAddTask } from "react-icons/md";
import TaskCard from "../TaskCard/TaskCard";
import {useQuery} from '@tanstack/react-query'
import { axiosPublic } from "../../../api";
import useAuth from "../../../hooks/useAuth";

const YourTasks = () => {
  const [todo,setTodo] = useState([])
  const [ongoing,setOngoing] = useState([])
  const [completed,setCompleted] = useState([])

  const {user} = useAuth()

  const {data: tasks = [], refetch, isLoading, isFetching} = useQuery({
    queryKey: ["tasks"],
    queryFn: async()=>{
      const {data} = await axiosPublic.get(`/get-tasks/${user?.email}`)
      return data;
    }
  });

  useEffect(()=>{
    const todo = tasks.filter(t => t.status === "todo");
    const ongoing = tasks.filter(t => t.status === "ongoing");
    const completed = tasks.filter(t => t.status === "completed");

    setTodo(todo)
    setOngoing(ongoing)
    setCompleted(completed)
  },[tasks,setTodo,setOngoing,setCompleted])

  // console.log(tasks);
  

  return (
    <div className="relative grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* todo lists */}
      <TaskCard
      sectionName="todo"
        tasks={todo}
        refetch={refetch}
      />
      {/* ongoing lists  */}
      <TaskCard sectionName="ongoing" tasks={ongoing} isLoading={isLoading} refetch={refetch} />
      {/* completed lists  */}
      <TaskCard sectionName="completed" tasks={completed} isLoading={isLoading} refetch={refetch}/>
    </div>
    
  );
};

export default YourTasks;
