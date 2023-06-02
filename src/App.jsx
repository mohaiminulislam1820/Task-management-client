import { useState } from "react";
import Form from "./Components/Form";
import TaskList from "./Components/TaskList"

const App = () => {
  const [added,setAdded]=useState(false);
  return (
    <div>
      
      <Form setAdded={setAdded}></Form>

      <TaskList added={added} setAdded={setAdded}></TaskList>
      
    </div>
  );
};

export default App;