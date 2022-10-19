import React from 'react'
import CenterBlock from '../../Molecule/CenterBlock'
import {Link} from "react-router-dom";
import style from './AddName.module.scss'
const AddName = (props) => {

  return(
      <CenterBlock
          heading = 'Welcome! First thing first'
          para = "you can always change them later"
      >
          <div className={"mb-4"}>

                <div className={`${style.form_group} mb-3`}>
                    <label htmlFor="name" className="form-label">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                         className={style.form_control}
                        placeholder=" John Smith"
                    />
                </div>
                <div  className={`${style.form_group} mb-3`}>
                    <label htmlFor="cname" className="form-label">
                        Display name
                    </label>
                    <input
                        type="text"
                        name="cname"
                        className={style.form_control}
                        placeholder=" Alpha Inc"
                    />

                </div>

              <Link  to="/workplace">
              <button onClick={()=> props.setIsActive(true)} className={`btn btn-primary ${style.create_btn}`}>
                  Create Workspace
              </button>
              </Link>
          </div>
      </CenterBlock>
  )
}
export default AddName
