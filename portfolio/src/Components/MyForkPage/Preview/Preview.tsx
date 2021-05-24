import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { MyWorkType } from '../../../State/State'
import c from './Preview.module.css'

type PreviewPropsType = {
    preview: MyWorkType
    setPath: (newPath: string) => void
}

export const Preview = (props: PreviewPropsType) => {

    let setPath = () => {
        props.setPath(props.preview.id)
    }

    // We gonna pass here image, short description, and title
    const path = '/mywork/' + props.preview.id
    return (
        <div className={c.previewContainer}>
            {props.preview.title}
            <NavLink to={path} onClick={setPath} style={{textDecoration: 'none'}}>See More</NavLink>
        </div>
    )

} 