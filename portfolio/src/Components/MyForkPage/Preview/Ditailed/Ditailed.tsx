import React from 'react'
import { MyWorkType } from '../../../../State/State'
import c from './Ditailed.module.css'

type DitailedPropsType = {
    preview: MyWorkType
}

export const Ditailed = (props: DitailedPropsType) => {

    return (
        <div className={c.mainContainer}>
            <h2>{props.preview.title}</h2>
            
            
        </div>
    )
}