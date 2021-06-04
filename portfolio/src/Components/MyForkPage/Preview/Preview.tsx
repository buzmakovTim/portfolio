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
                
                {/* Title container */}
                <div className={c.titleContainer}>
                    {props.preview.title}
                </div>
                
                {/* Image container */}
                <div className={c.imageContainer}>
                    <img src={props.preview.urlImage} alt=""/>
                </div>

                {/* Short Description container */}
                <div className={c.descriptionContainer}>
                     <div className={c.description}>
                        {props.preview.shortDescription}
                     </div>
                     
                </div>

                {/* Click for more Info container */}
                <div className={c.moreInfo}>
                    <span>Click here for more info</span>
                    
                </div>
            </div>
        </NavLink>
            

        </div>
    )

} 