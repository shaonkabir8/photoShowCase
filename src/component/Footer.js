import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="copyright-text">
                                <h3>PhotoShowCase@info.com</h3>
                                <ul className="footer-menu social-icon">
                                  <li>
                                    <a href="http//:facebook.com"><i className="fab fa-facebook-f"></i></a>
                                    <a href="http//:twitter.com"><i className="fab fa-twitter"></i></a>
                                    <a href="http//:instagram.com"><i className="fab fa-instagram"></i></a>
                                    <a href="http//:linkedin.com"><i className="fab fa-linkedin"></i></a>
                                    <a href="http//:youtube.com"><i className="fab fa-youtube"></i></a>
                                  </li>
                                </ul>
                                <p className="copyright">All right Reserved &copy; Shaon Kabir</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
