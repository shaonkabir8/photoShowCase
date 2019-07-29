import React from 'react'

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
                                    <a href="/">Home</a>
                                    <a href="/about">About</a>
                                    <a href="/blog">Blog</a>
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
