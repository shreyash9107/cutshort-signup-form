import React from 'react'
import CenterBlock from "../../Molecule/CenterBlock";
import {Link} from "react-router-dom";
import style from './Success.module.scss'

const Success = (props) => {
    return(
        <CenterBlock
            heading = 'Congratulation, Eren!'
            para = "You have completed onboarding, you can start using Eden!"
            imageSuccess={true}
        >

                <button  className={`btn btn-primary ${style.create_btn}`}>
                    Create Workspace
                </button>

        </CenterBlock>
    )
}
export default Success
