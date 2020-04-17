import React from 'react'

export default function content(props) {
    return (
        <section className="content">
            <div className="container-fluid">
                {props.children}
            </div>
        </section>
    )
}