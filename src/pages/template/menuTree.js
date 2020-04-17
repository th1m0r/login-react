import React from 'react'

export default function menuTree(props) {

    return (
        <li className="nav-item has-treeview">
            <a href={props.path} className="nav-link">
                <i className={`nav-icon fa fa-${props.icon}`}></i>
                <p>
                    {props.label}
                    <i className="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul className="nav nav-treeview">
                {props.children}
            </ul>
        </li>
    )
}