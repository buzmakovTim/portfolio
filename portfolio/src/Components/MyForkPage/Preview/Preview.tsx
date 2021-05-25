import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { MyWorkType } from '../../../State/State'
import c from './Preview.module.css'

type PreviewPropsType = {
    preview: MyWorkType
    setForDitailed: (id: string) => void
}

export const Preview = (props: PreviewPropsType) => {

    let setForDitailed = () => {
        props.setForDitailed(props.preview.id)
    }

    // We gonna pass here image, short description, and title
    const path = '/mywork/' + props.preview.id
    return ( <div>

    
        <NavLink to={path} style={{textDecoration: 'none'}} onClick={setForDitailed}>
            <div className={c.previewContainer}>
                
                <div className={c.title}>
                    {props.preview.title}
                </div>
                
                
                {/* <div className={c.seeMore}>
                    <NavLink to={path} onClick={setForDitailed} style={{textDecoration: 'none'}}>
                        See More
                    </NavLink>
                </div> */}
            </div>
        </NavLink>
            

        </div>
    )

} 