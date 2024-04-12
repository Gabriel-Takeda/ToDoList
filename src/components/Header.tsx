import style from './Header.module.css'
import Rocket from '../assets/Rocket.svg'

const Header = () => {
    return (
        <header className={style.header}>
            <img src={Rocket}/>
            <h1  className={style.to}>to</h1>
            <h1 className={style.do}>do</h1>
        </header>
    )
}

export { Header }