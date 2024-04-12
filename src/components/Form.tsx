import { PlusCircle } from 'phosphor-react'
import style from './Form.module.css'
import { useState, ChangeEvent, FormEvent } from 'react'

import { TotalTask } from './TotalTask'
import { TaskConcluidas } from './TaskConcluidas'
import { Task } from './Task'
import { NoTask } from './NoTask'

const Form = () => {

    const [taskList, setTaskList] = useState<string[]>([])
    const [newTask, setNewTask] = useState('')
    const [completed, setCompleted] = useState(0) 

    const OnUpdateTask = () => {
        setCompleted(completed => completed + 1)
    }

    const OffUpdateTask = () => {
        setCompleted(completed => completed - 1)
    }

    const onDeleteTask = (content:string) => {
        setTaskList(taskList.filter((task) => task != content))
    }

    const handlerCreateaTask = ( event:FormEvent ) => {
        event.preventDefault()
        if (newTask.trim() != ''){
            setTaskList(prev => [...prev,newTask])
            setNewTask('')
        }
    }

    const handlerNewTaskChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        setNewTask(event.target.value)
    }

    return (
        <div>
            <form className={style.form} onSubmit={handlerCreateaTask}>
                <textarea
                    className={style.textarea}
                    placeholder={'Adicione uma nova tarefa'}
                    value={newTask}
                    onChange={handlerNewTaskChange}
                    />
                <button className={style.button} type="submit">
                    Criar <PlusCircle/>
                </button>
            </form>
            <div className={style.div}>
                <TotalTask quantidade={taskList.length}/>
                <TaskConcluidas quantidadeConcluida={completed} quantidadeTotal={taskList.length}/>
            </div>

            <div className={style.div2}>
                {!taskList.length && 
                    <NoTask/>
                }
                
                {taskList.map( (task) => {
                    return (
                        <Task key={task} content={task} OnDeleteTask={onDeleteTask} OnUpdateTask={OnUpdateTask} OffUpdateTask={OffUpdateTask} />
                    )
                }) 
            }
            </div>
        </div>
    )
}

export { Form }