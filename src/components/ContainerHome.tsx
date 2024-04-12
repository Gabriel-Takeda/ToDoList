import React, { ReactNode } from "react";
import style from './ContainerHome.module.css'

interface IContainerHome {   children: ReactNode; }

const ContainerHome: React.FC<IContainerHome> = ({ children }) => {

    return (
        <div className={style.containerHome}>
            {children}
        </div>
    )
}

export { ContainerHome }