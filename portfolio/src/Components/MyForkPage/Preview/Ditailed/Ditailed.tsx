import React from 'react'
import { MyWorkType } from '../../../../State/State'

type DitailedPropsType = {
    preview: MyWorkType
}

export const Ditailed = (props: DitailedPropsType) => {

    return (
        <div>
            <h2>{props.preview.title}</h2>
            {/* {alert(props.preview.id)} */}
        </div>
    )
}