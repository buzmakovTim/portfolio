import React from 'react'
import { v1 } from 'uuid';
import checkWeightPic from '../img/checkWeight.png'
import git from '../img/git.png'

export type MyWorkType = {
        id: string
        title : string
        shortDescription: string
        longDescription: string
        urlImage: string
        gitHubLink: string
        gitLogo: string
}

export type StateType = {
    myWork: MyWorkType[]
    
}


const State : StateType = {

    myWork : [
     {
            id: v1(),
            title : 'Check Weight (Purdys Chocolaties Ltd)',
            shortDescription: 'Description about check weight project',
            longDescription: `Description about check weight project. We gonna 
                          provide way way mote text here so it's more information
                          and more descriptive. Check weight it's a real project
                          which currently in use in Purdys Chocolate prodaction
                          floor`,
            urlImage: checkWeightPic,
            gitHubLink: 'https://github.com/buzmakovTim',
            gitLogo: git
        },
        {
            id: v1(),
            title : 'ToDoList',
            shortDescription: 'Description about check weight project',
            longDescription: 'Description about check weight project',
            urlImage: checkWeightPic,
            gitHubLink: 'https://github.com/buzmakovTim',
            gitLogo: git
        },
        {
            id: v1(),
            title : 'Social Network',
            shortDescription: 'Description about check weight project',
            longDescription: 'Description about check weight project',
            urlImage: checkWeightPic,
            gitHubLink: 'https://github.com/buzmakovTim',
            gitLogo: git
        },
        {
            id: v1(),
            title : 'Other Project',
            shortDescription: 'Description about check weight project',
            longDescription: 'Description about check weight project',
            urlImage: checkWeightPic,
            gitHubLink: 'https://github.com/buzmakovTim',
            gitLogo: git
        }
    ]
}

export default State;