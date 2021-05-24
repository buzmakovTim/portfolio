import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Checkbox, IconButton } from '@material-ui/core';
import c from './MyWorkPage.module.css';
import { Preview } from './Preview/Preview';
import { MyWorkType } from '../../State/State';
import { v1 } from 'uuid';
import { Ditailed } from './Preview/Ditailed/Ditailed';
import { useState } from 'react';

type MyWorkPagePropsType = {
    myWork: MyWorkType[]
}

const MyWorkPage = (props: MyWorkPagePropsType) => {

    let [path, setPath] = useState<string>('')

    const previewComponent = props.myWork.map(mw => {
        return <Preview key={v1()} preview={mw} setPath={setPath}/>
    })


    return (

        <div  className={c.mainMyWorkPage}>
            
            <div className={c.buttonPossition}>
                    <NavLink to="/index" style={{textDecoration: 'none'}}>
                            <Button style={{color: 'white', background: '#264469'}}>
                                Home
                            </Button>
                    </NavLink>
            </div>
            <div className={c.preview}>
                {previewComponent}
                {console.log(previewComponent)}
            </div>
            
            <Route path={path} render={() => <Ditailed />} />
        </div>
    )
}

export default MyWorkPage;