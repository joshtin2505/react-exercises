import TaskTab from "./TaskTab" 

function ViewTasks({tasks, del}) {
  return (
    <section className="w-full h-3/5 p-4">
    <div className="bg-zinc-700 h-full w-full p-4 rounded-sm flex flex-wrap justify-center items-center gap-2 ">
      {
        tasks.map((task,index) => {
          return <TaskTab key={index} id={index} del={del} task={task.values} desc={task.values2}/>
          
        })
      }
    </div>
  </section>
  )
}

export default ViewTasks