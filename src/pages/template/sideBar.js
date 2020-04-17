import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './menu'

export default function sideBar(props) {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">

            <Link to="/" className="brand-link">
                <span className="brand-text font-weight-light">Login APP</span>
            </Link>

            <div className="sidebar">
                <Menu />
            </div>
        </aside>
    )
}