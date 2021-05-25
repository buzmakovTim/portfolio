import React from 'react'
import { NavLink, Route } from 'react-router-dom';
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

    let [forDitailed, setForDitailed] = useState<MyWorkType>(props.myWork[0])
    
    

    let setForDitailedCallBack = (id: string) => {
        let workToShow = props.myWork.find( work => work.id === id)
        if(workToShow)
        setForDitailed(workToShow)
    }

    const previewComponent = props.myWork.map(mw => {
        return <Route exact path={'/mywork'} render={ () => <Preview key={v1()} preview={mw} setForDitailed={setForDitailedCallBack}/>} />
    })



    return (

        <div  className={c.mainMyWorkPage}>
            
            <div className={c.buttonPossition}>
                    <NavLink to="/index" style={{textDecoration: 'none'}}>
                            <Button style={{color: 'white', background: '#264469', margin: '0 10px'}}>
                                Home
                            </Button>
                    </NavLink>


            <Route exact path={'/mywork/' + (forDitailed.id)} render={() => <NavLink to="/mywork" style={{textDecoration: 'none'}}>
                            <div className={c.backButton}>
                                <Button style={{color: 'white', background: '#264469', margin: '0 10px'}}>
                                    <span>Back</span>
                                </Button>
                            </div>
                    </NavLink>} /> 
            

            </div>
            <div className={c.preview}>
                {previewComponent}
                {/* <Route exact path={'/mywork'} render={ () => previewComponent}/> */}
                {/* {console.log(previewComponent)} */}
            </div>
            
                <Route path={'/mywork/' + (forDitailed.id)} render={() => <Ditailed preview={forDitailed}/>} />
            
        </div>
    )
}

export default MyWorkPage;