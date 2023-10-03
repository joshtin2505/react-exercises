import { useState } from "react"
function useTasks(){
    const [tasks, setTasks] = useState([])
    const [values, setValues] = useState()
    const [values2, setValues2] = useState()
    const handleSubmit = (e) => {
      e.preventDefault()
      if (tasks.length === 1 && tasks[0] === null){
        setTasks([{values,values2}])
      }
      setTasks([...tasks,{values,values2}])
    }
    const handleChangeInp = (e) => {
      setValues(e.target.value)
  
    }
    const handleChangeTxA = (e) => {
      setValues2(e.target.value)
    }
    function del(id){
      const newArray = tasks.filter((element,index) => index !== id )
      setTasks(newArray)
      
    }
    return {del,handleChangeInp,handleChangeTxA,handleSubmit,tasks}
}
export default useTasks