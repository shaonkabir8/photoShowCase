import React from 'react'

const Footer = () => {

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="copyright-text">
                            <h3>info@photoshowcase.com</h3>
                            <ul className="footer-menu social-icon">
                              <li>
                                <a href="http//:facebook.com">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="http//:twitter.com">
                                  <i className="fab fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="http//:instagram.com">
                                  <i className="fab fa-instagram"></i>
                                </a>
                              </li>
                              <li>
                                <a href="http//:linkedin.com">
                                  <i className="fab fa-linkedin"></i>
                                </a>
                              </li>
                              <li>
                                <a href="http//:youtube.com">
                                  <i className="fab fa-youtube"></i>
                                </a>
                              </li>
                            </ul>
                            <p className="copyright">All right Reserved &copy; Shaon Kabir </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;