

const Form = () => {

    const handleSubmit = async(e) => {
        e.preventDefault();
        
    }

    return (
        <div className="w-10/12 mx-auto my-8">
            <h1 className="text-4xl font-bold text-center mb-12">Add Task</h1>
            <form onSubmit={handleSubmit}>

                <div className="mb-6">
                    <label htmlFor="task_name" className="font-bold">Task Name :</label>

                    <input type="text" name="task_name" className="block rounded-lg border-2 px-4 py-2 mt-2 w-10/12 lg:w-5/12 xl:w-4/12" />
                </div>

                <div className="mb-6">
                    <label htmlFor="task_description" className="font-bold">Task Description :</label>

                    <textarea type="text" name="task_description" className="block rounded-lg border-2 px-4 py-2 mt-2 w-10/12" rows={5} />

                </div>

                <div className="">
                    
                    <label htmlFor="" className="font-bold block mb-2">Task Status</label>

                    <input type="radio" name="task_status" value={'Completed'} className="ml-4 mr-2 " />
                    <label htmlFor="completed">Completed</label>

                    <input type="radio" name="task_status" value={'Ongoing'} className="ml-4 mr-2 " />
                    <label htmlFor="ongoing">Ongoing</label>
                </div>

                <button type="submit" className="px-6 py-2 rounded-lg bg-blue-600 text-white font-bold mt-8">Submit</button>

            </form>
        </div>
    );
};

export default Form;