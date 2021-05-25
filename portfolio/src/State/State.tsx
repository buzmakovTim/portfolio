import React from 'react'
import { v1 } from 'uuid';


export type MyWorkType = {
        id: string
        title : string
        description: string
        urlImage: string
        gitHubLink: string
}

export type StateType = {
    myWork: MyWorkType[]
}

const State : StateType = {

    myWork : [
     {
            id: v1(),
            title : 'Check Weight',
            description: 'Description about check weight project',
            urlImage: '...',
            gitHubLink: '...'
        },
        {
            id: v1(),
            title : 'ToDoList',
            description: 'Description about check weight project',
            urlImage: '...',
            gitHubLink: '...'
        },
        {
            id: v1(),
            title : 'Social Network',
            description: 'Description about check weight project',
            urlImage: '...',
            gitHubLink: '...'
        },
        {
            id: v1(),
            title : 'Other Project',
            description: 'Description about check weight project',
            urlImage: '...',
            gitHubLink: '...'
        }
    ]
}

export default State;