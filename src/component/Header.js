import React from 'react'
import {NavLink, Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-auto">
                        <Link to="/" className="logo">PhotoShowCase</Link>
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
export default Header;