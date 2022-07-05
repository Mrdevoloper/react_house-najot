import React from "react";
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom'
import './Header.css'


function header() {
    return(
        <header>
            <div className="container header-container">
                <div className="ico">
                    <h3 className="ico_header">Najot House</h3>
                </div>
                <div className="buttons">
                    <NavLink to={'/'}><Button color="secondary">House</Button></NavLink>
                    <NavLink to={'/admin'}><Button color="secondary">Admin</Button></NavLink>
                </div>
            </div>
        </header>
    )
}

export default header