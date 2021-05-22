import React from 'react';
import c from './MainPage.module.css';
import { Button, Checkbox, IconButton } from '@material-ui/core';
import { NavLink} from 'react-router-dom';

export const MainPage = () => {

    const greating = "hello ( I'm Timofey Buzmakov ) {" + 
    "\nI'm a full-stuck software developer" + 
    "\n}"

    

    return (
        <div className={c.container}>

            <div className={c.centerContainer}>
                <div>
                    <p className={c.mainTitle} style={{whiteSpace: 'pre-line'}}>{greating}</p>
                </div>
                <div>
                    <NavLink to="/mywork" style={{textDecoration: 'none'}}>
                            <Button style={{color: 'white', background: '#264469'}}>
                                My Work
                            </Button>
                    </NavLink>
                    
                        
                </div>
                
            </div>
            
        </div>
    )
}

