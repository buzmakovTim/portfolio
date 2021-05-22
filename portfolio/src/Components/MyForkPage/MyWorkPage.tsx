import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Checkbox, IconButton } from '@material-ui/core';
import c from './MyWorkPage.module.css';

const MyWorkPage = () => {

    return (

        <div  className={c.mainMyWorkPage}>
            <div>
            My Work Page
            </div>
            <div>
                    <NavLink to="/index" style={{textDecoration: 'none'}}>
                            <Button style={{color: 'white', background: '#264469'}}>
                                Home
                            </Button>
                    </NavLink>
            </div>
                
        </div>
    )
}

export default MyWorkPage;