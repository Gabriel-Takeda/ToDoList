import style from './TotalTask.module.css'

interface INumber {
    quantidade: number
}

const TotalTask = ({ quantidade }: INumber) => {
    return (
        <div className={style.div}>
        <h1 className={style.tarafasCriadas}>
            Tarefas criadas
        </h1>
        <h1 className={style.numberStyle}>
            { quantidade }
        </h1>
        </div>
    )
}

export { TotalTask }