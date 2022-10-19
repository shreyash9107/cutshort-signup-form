import React from 'react'
import CenterBlock from '../../Molecule/CenterBlock'
import style from "../AddNameComponent/AddName.module.scss";
import {Link} from "react-router-dom";
const WorkPlace = (props) => {
    return(
        <CenterBlock
            heading = 'Lets setup home for all your work'
            para = "you can always create another workspace later."
        >
            <div className={"mb-4"}>

                <div className={`${style.form_group} mb-3`}>
                    <label htmlFor="name" className="form-label">
                       Workspace Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className={style.form_control}
                        placeholder=" John Smith"
                    />
                </div>
                <div  className={`${style.form_group} mb-3`}>
                    <label htmlFor="name" className="form-label">
                        Workspace URL
                    </label>
                    <div className={`${style.email_input} input-group mb-3`}>
                        <span className="input-group-text" id="basic-addon3">http://eden.com</span>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                    </div>

                </div>

                <Link  to="/setup">
                    <button onClick={()=> props.setIsActive(true)} className={`btn btn-primary ${style.create_btn}`}>
                        Create Workspace
                    </button>
                </Link>
            </div>
        </CenterBlock>
    )
}
export default WorkPlace
