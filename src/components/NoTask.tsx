import  Clipboard  from "../assets/Clipboard.svg"
import style from './NoTask.module.css'

const NoTask = () => {
    return (
        <div className={ style.styleDivNoTask }>
            <img src={Clipboard}/>
            <h1><strong>Você ainda não tem tarefas cadastradas</strong></h1>
            <h1> Crie tarefas e organize seus itens a fazer</h1>
        </div>
    )
}

export { NoTask }