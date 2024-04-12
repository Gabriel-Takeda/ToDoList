import { Trash } from 'phosphor-react'
import style from './Task.module.css'
import { useState } from 'react'

interface ITask {
    content:string 
    OnDeleteTask: (task:string) => void
    OnUpdateTask: () => void
    OffUpdateTask: () => void
}

const Task = ({ content, OnDeleteTask, OnUpdateTask, OffUpdateTask }:ITask) => {

    const [isChecked, setIschecked] = useState(false)

    const handleUpdateTask = () => {
        if (!isChecked) {
            OnUpdateTask()
            setIschecked(isChecked => isChecked = true)
        }
    }
    const handleDeleteTask = () => {
        if (isChecked) {
            OffUpdateTask()
        }
        OnDeleteTask(content)
    }

    return (
        <div className={style.divFromTask}>
            <input  onClick={handleUpdateTask} type="radio" id="radio" className={style.inputConfirm} />
            <h1 className={style.textoTask}>
                {content}
            </h1>
            <button className={style.buttonDelete} onClick={handleDeleteTask}>
                <Trash size={24}/>
            </button>
        </div>
    )
}

export { Task }