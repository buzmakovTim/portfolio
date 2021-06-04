import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { MyWorkType } from '../../../../State/State'
import c from './Ditailed.module.css'

type DitailedPropsType = {
    preview: MyWorkType
}

export const Ditailed = (props: DitailedPropsType) => {

    return (
        <div className={c.mainContainer}>
            <div className={c.titleContainer}>
                <h2>{props.preview.title}</h2>
            </div>
             {/* Image container */}
             <div className={c.imageContainer}>
                    <img src={props.preview.urlImage} alt="" />
                </div>
            <div className={c.descriptionContainer}>
                <span>{props.preview.longDescription}</span>
            </div>
            {/* Links */}
            <div className={c.linksContainer}>
                {/* <NavLink  style={{textDecoration: 'none'}}>
                <img src={props.preview.gitLogo} alt="" />
                </NavLink> */}
                <a target="_blank" href={props.preview.gitHubLink}>
                    <img src={props.preview.gitLogo} alt="" />
                </a>
                
            </div>
            

            
        </div>
    )
}