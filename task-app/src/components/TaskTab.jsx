import {GoTrash} from 'react-icons/go'
import {AiOutlineCheckSquare} from 'react-icons/ai'
import { useState } from 'react'
function TaskTab({task, desc, del, id}) {
    const [txtDash, setTxtDash] = useState(false)
    const dash = () => setTxtDash(!txtDash)
    return(
      <div className={`p-2 bg-zinc-600 rounded-sm w-80 shadow-md transition-all hover:shadow-lg hover:scale-[1.02] overflow-hidden flex flex-col gap-2 ${txtDash ? 'line-through text-zinc-400' : ''}`}>
        <h3 className="text-2xl font-medium">{task}</h3>
        <p className="font-medium h-28 overflow-y-auto">{desc}</p>
        <div className="flex gap-2">
              <button onClick={()=>del(id)} className="p-1 bg-zinc-500 rounded-sm hover:bg-red-600 transition-all">
                <GoTrash size={20}/>
              </button>
              <button onClick={dash} className="p-1 bg-zinc-500 rounded-sm hover:bg-green-600 transition-all">
                <AiOutlineCheckSquare size={20}/>
              </button>
        </div>
      </div>
    )
  }
export default TaskTab