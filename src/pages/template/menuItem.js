import React from 'react'
import { Link } from 'react-router-dom'

export default function menuItem(props) {
    return (
        <li className="nav-item" style={{marginLeft: props.marginLeft || 0}} >
            <Link to={props.path} className="nav-link">
                <i className={`nav-icon fa fa-${props.icon}`}></i> 
                <p>{props.label}</p>
            </Link>
        </li>
    )
}