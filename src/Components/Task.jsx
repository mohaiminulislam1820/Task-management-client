import { useState } from "react";


const Task = ({ task, loadData }) => {

    const { task_name, task_description, task_status, _id } = task;

    const [editable, setEditable] = useState(false);

    const handleDelete = async () => {
        const res = await fetch(`https://task-management-server-phi-pied.vercel.app/delete-task/${_id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });

        const result = await res.json();

        loadData();
    }

    const handleUpdate = async (e) => {
        e.preventDefault();

        const updatedStatus = { "task_status": e.target.task_status.value };
        console.log(updatedStatus)
        const res = await fetch(`https://task-management-server-phi-pied.vercel.app/update-task-status/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedStatus)
        });

        const result = await res.json();
        await loadData();
        setEditable(false);

    }

    return (
        <div className="border p-4 rounded-lg ">
            <p className="mb-2"><span className="font-semibold ">Task Name : </span>{task_name}</p>
            <p className="mb-2"><span className="font-semibold">Task Description : </span>{task_description}</p>


            {editable
                ? <form className="mb-6" onSubmit={handleUpdate}>

                    <div className="flex flex-wrap ">
                        <div>
                            <input type="radio" name="task_status" value={'Completed'} className="ml-4 mr-2 " required />
                            <label htmlFor="completed">Completed</label>
                        </div>

                        <div><input type="radio" name="task_status" value={'Ongoing'} className="ml-4 mr-2 " />
                            <label htmlFor="ongoing">Ongoing</label></div>

                        <div>
                            <input type="radio" name="task_status" value={'Not started'} className="ml-4 mr-2 " />
                            <label htmlFor="ongoing">Not started</label>
                        </div>
                    </div>

                    <button className="px-6 py-1 bg-yellow-500 font-bold rounded-lg mt-1" type="submit">Update</button>
                </form>
                : <div className="mb-6">
                    <p><span className="font-semibold">Task Status : </span>{task_status}</p>
                    <button className="bg-slate-800 px-1 rounded-lg " onClick={() => setEditable(true)}>✏️</button></div>
            }


            <button className="px-6 py-1 bg-red-600 text-white font-bold rounded-lg" onClick={handleDelete}>Delete</button>

        </div>
    );
};

export default Task;