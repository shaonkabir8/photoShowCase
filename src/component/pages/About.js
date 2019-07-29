import React,{Component} from 'react'


import raselVai from '../../img/rasel-vai.jpg'

export default class About extends Component {
	render() {
		return (
			<React.Fragment>
			    <div className="section-padding">
			        <div className="container">
			            <div className="row">
			                <div className="col-md-6">
			                    <div className="about-text">
			                        <h4>PhotoShowCase</h4>
			                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis cumque tempore vel, corrupti temporibus quo earum. Culpa libero iure veniam!</p>
			                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis numquam illo quod nostrum, blanditiis, rem.</p>
			                        <a href="/" className="boxed-btn">Learn more</a>
			                    </div>
			                </div>
			                <div className="col-md-6 text-center">
			                    <div className="credit">
			                        <h4>Credit</h4>
			                        <p>All Credit goes to honourable brother <b>Rasel Ahmed</b></p>
			                        <div className="meta ">
				                        <img src={raselVai} alt={"Rasel Ahmed"}/>
				                        <h5>Rasel Ahmed <span>Developer | founder of Shikhun.net | Teacher</span></h5>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</React.Fragment>
		)
	}
}
