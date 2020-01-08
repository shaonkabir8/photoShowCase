import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-auto">
                        <a href="/" className="logo">PhotoShowCase</a>
                    </div>
                    <div className="col-md-6 my-auto text-right">
                        <div className="mainmenu">
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                     <NavLink to="/blog">Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
