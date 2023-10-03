import AddTask from "./components/AddTask"
import ViewTasks from "./components/ViewTasks"
import useTasks from "./hooks/useTasks"
function App() {
  const {del,handleChangeInp,handleChangeTxA,handleSubmit,tasks} = useTasks()
  return (
    <div className="bg-zinc-900 text-white flex flex-col justify-center items-center h-screen">
      <AddTask handleSubmit={handleSubmit} handleChangeInp={handleChangeInp} handleChangeTxA={handleChangeTxA}/>
      <ViewTasks tasks={tasks} del={del}/>
    </div>
  )
}



export default App
