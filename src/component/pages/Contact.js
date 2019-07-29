import React,{Component} from 'react'




export default class Contact extends Component {
	render() {
		return (
			<div className="row">
                <div className="col-md-6">
                    <div className="contact-info">
                        <div className="info-text">
                            <h4>photoShowCase</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi ab, harum labore vitae facilis nobis aliquam ipsam quaerat, ratione, officiis. Nesciunt mollitia provident, sed soluta quod consectetur ex voluptas.</p>
                            </div>
                        <p>Email:<a href="mailto:photoShowCase@info.com">photoShowCase@info.com</a></p>
                        <p>Phone:<a href="tel:+02654541651">+02654541651</a></p>
                        <div className="social-icon">
                            <a href="http//:facebook.com"><i className="fab fa-facebook-f"></i></a>
                            <a href="http//:twitter.com"><i className="fab fa-twitter"></i></a>
                            <a href="http//:instagram.com"><i className="fab fa-instagram"></i></a>
                            <a href="http//:linkedin.com"><i className="fab fa-linkedin"></i></a>
                            <a href="http//:youtube.com"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="contact-form">
                        <h4>Drop us a line</h4>
                        <form action="" method="POST">
                            <input type="text" placeholder="Enter you Name"/>
                            <input type="email" placeholder="Enter you Email"/>
                            <textarea name="mssg" placeholder="Write your message"></textarea>
                        </form>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </div>
                </div>
            </div>
		)
	}
}