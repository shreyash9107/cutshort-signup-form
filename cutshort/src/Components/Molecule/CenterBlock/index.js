import React from 'react'
import style from './CenterBlock.module.scss'
import success from "../Icons/success.PNG";
const CenterBlock = (props) => {
    return(
        <div className={style.auth_login}>
            {props.imageSuccess ?    <img className={'mb-4'}  src={success}/> : ''}
            <h3>{props?.heading ? props?.heading : ''}</h3>
            <p>{props?.para ? props?.para : ''}</p>
            <div className={style.child}>
                {props.children}
            </div>

        </div>
    )
}
export default CenterBlock
