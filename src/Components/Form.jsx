import { useRef, useState } from "react";


const Form = () => {

    const [loading, setLoading] = useState(false);
    const modalref = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const task_name = form.task_name.value;
        const task_description = form.task_description.value;
        const task_status = form.task_status.value;

        const task = { task_name, task_description, task_status };

        setLoading(true);
        modalref.current.checked = true;

        const res = await fetch('https://task-management-server-phi-pied.vercel.app/add-task', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        })
        const result = await res.json();

        if (result.insertedId)
            console.log('success')
        setLoading(false);

    }

    return (
        <div className="w-10/12 mx-auto my-8">
            <h1 className="text-4xl font-bold text-center mb-12">Add Task</h1>
            <form onSubmit={handleSubmit}>

                <div className="mb-6">
                    <label htmlFor="task_name" className="font-bold">Task Name :</label>

                    <input type="text" name="task_name" className="block rounded-lg border-2 px-4 py-2 mt-2 w-10/12 lg:w-5/12 xl:w-4/12" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="task_description" className="font-bold">Task Description :</label>

                    <textarea type="text" name="task_description" className="block rounded-lg border-2 px-4 py-2 mt-2 w-10/12 h-40" required />

                </div>

                <div className="">

                    <label htmlFor="" className="font-bold block mb-2">Task Status</label>

                    <div className="flex flex-wrap">
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
                </div>

                <button type="submit" className="px-6 py-2 rounded-lg bg-blue-600 text-white font-bold mt-8">Submit</button>

            </form>

            {/* modal */}

            <label htmlFor="my_modal_7" className="btn hidden" >open modal</label>


            <input type="checkbox" id="my_modal_7" ref={modalref} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-white">
                    <label htmlFor="my_modal_7" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    {loading
                        ? <div>
                            <span className="px-3 rounded-full  border-4 border-red-500 animate-ping"></span>
                            <span> Processing request</span>
                        </div>

                        : <h3>Success</h3>

                    }
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>


        </div>
    );
};

export default Form;