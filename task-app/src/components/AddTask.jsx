import React from 'react'

function AddTask({handleSubmit,handleChangeInp,handleChangeTxA}) {
  return (
    <section className="w-full h-2/5 flex justify-center items-center">
        <form onSubmit={handleSubmit} action="" className="bg-zinc-600 p-4 rounded-sm flex flex-col w-80 font-medium gap-2">
        <label htmlFor="">Task</label>
        <input onChange={handleChangeInp} name="task" className="text-black rounded-sm outline-none px-2" type="text" />
        <label htmlFor="">Description</label>
        <textarea onChange={handleChangeTxA} className="text-black outline-none rounded-sm p-2" name="des" ></textarea>
        <div className="flex w-full justify-center">
            <button className="bg-zinc-700 hover:bg-zinc-800 py-1 w-1/4">Agregar</button>
        </div>
        </form>
  </section>
  )
}

export default AddTask