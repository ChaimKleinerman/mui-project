
import Routs from './routs/Routs';
//data structure 
const projects = [
    {
      name: "Project 1",
      tasks: [
        {
          name: "Task 1",
          dueDate: "2023-10-15",
          description: ["Instruction 1", "Instruction 2"],
          status: "Pending"
        },
        {
          name: "Task 2",
          dueDate: "2023-10-20",
          description: ["Instruction 3", "Instruction 4"],
          status: "In Progress"
        }
      ]
    },
    {
      name: "Project 2",
      tasks: [
        {
          name: "Task 1",
          dueDate: "2023-11-01",
          description: ["Instruction 1", "Instruction 2", "Instruction 3"],
          status: "Completed"
        },
        {
          name: "Task 2",
          dueDate: "2023-11-10",
          description: ["Instruction 4", "Instruction 5"],
          status: "Aborted"
        }
      ]
    }
  ];
  
function App() {

  return (
    <>
   
    <Routs/>
    </>
  )
}

export default App
