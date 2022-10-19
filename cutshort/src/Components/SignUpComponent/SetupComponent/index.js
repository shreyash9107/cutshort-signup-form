import React from 'react'
import CenterBlock from "../../Molecule/CenterBlock";
import style from './Setup.module.scss'
import men from '../../Molecule/Icons/men.PNG'
import group from '../../Molecule/Icons/group.PNG'
import {Link} from "react-router-dom";

const SetupWork = (props) => {
    return(
        <CenterBlock
            heading = 'How are you planning to use Eden?'
            para = "We'll Streamline your setup experience accordingly"
        >
            <div className={style.team}>
                <div className={style.men}>
                    <img  src={men}/>
                    <h5>For myself</h5>
                    <p>Write better.Think more clearly.Stay organized</p>
                </div>
                <div className={style.group}>
                    <img  src={group}/>
                    <h5>With my team</h5>
                    <p>Wikis,docs,task & projects,all in one place</p>
                </div>
            </div>
            <Link  to="/completed">
                <button onClick={()=>props.setIsActive(true)} className={`btn btn-primary ${style.create_btn}`}>
                    Create Workspace
                </button>
            </Link>
            </CenterBlock>
    )
}
export default SetupWork
