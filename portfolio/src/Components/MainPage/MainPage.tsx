import React from 'react';
import c from './MainPage.module.css';
import { Button, Checkbox, IconButton } from '@material-ui/core';

export const MainPage = () => {

    const greating = "Hello, I'm Timofey Buzmakov \n I'm a full-stuck software developer"

    return (
        <div className={c.container}>

            <div className={c.centerContainer}>
                <div>
                    <h3 style={{whiteSpace: 'pre-line'}}>{greating}</h3>
                </div>
                <div>
                    <Button style={{color: 'white', background: '#264469'}}>Portfolio</Button>
                </div>
                
            </div>
            
        </div>
    )
}
