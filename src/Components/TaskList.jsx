import { useEffect, useState } from "react";
import Task from "./Task";


const TaskList = ({ added, setAdded }) => {

    const [tasks, setTasks] = useState([]);

    const loadData = async () => {
        const res = await fetch('https://task-management-server-phi-pied.vercel.app/tasks');
        const result = await res.json();
        if(added)
            setAdded(false);
        setTasks(result);
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        if(added)
            loadData();
    }, [added]);


    return (
        <div className=" mt-24 mb-20 w-10/12 mx-auto">

            <h1 className="text-center font-bold text-4xl mb-12">All Tasks</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tasks.map(task => <Task key={task._id} task={task} loadData={loadData} />)}
            </div>

        </div>
    );
};

export default TaskList;