import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'


import './App.css';


import Header from './component/Header';
import Footer from './component/Footer';
import LatestPhotos from './component/LatestPhotos';
import Photo from './component/Photo';


import About from './component/pages/About'
import Contact from './component/pages/Contact'
import Blog from './component/pages/Blog'


const App = () => {
	return (
		<Router>
		<React.Fragment>
			<Header/>
			<div className="content-block">
				<div className="container">
					<div className="row">
						<div className="col">
							<Route exact path="/" render={props => (
								<LatestPhotos />
							)}/>
							<Route path="/about" component={About} />
							<Route path="/blog" component={Blog} />
							<Route path="/Contact" component={Contact} />
							<Route path="/photo" component={Photo} />
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</React.Fragment>
		</Router>
	)
}
export default App;

