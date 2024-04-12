
import style from './TaskConcluidas.module.css'

interface ITaskConcluidas {
    quantidadeTotal: number
    quantidadeConcluida:number
}

const TaskConcluidas = ( {  quantidadeTotal, quantidadeConcluida }: ITaskConcluidas ) => {
    return (
        <div className={style.div}>
            <h1 className={style.tarefasConcluidas}>
                Concluidas
            </h1>
            <h1 className={style.numberStyle}>
                { quantidadeConcluida } de { quantidadeTotal }
            </h1>
        </div>
    )
}

export { TaskConcluidas }