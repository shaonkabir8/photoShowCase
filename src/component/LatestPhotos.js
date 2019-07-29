import React,{Component} from 'react'
import axios from 'axios'

export default class LatestPhotos extends Component {

	state = {
		photos:[],
		page:1,
		loading: false,
		search: false,
		serach_Queary: ''
	}
	componentDidMount() {
		axios.get('https://api.unsplash.com/photos/?client_id=9b9b346cab5c970858f3e878816d0e93ce091d5d617bf30bb62a44cea72f71c5&per_page=16&page='+this.state.page)
		.then(res => this.setState({
			photos: res.data,
			page:this.state.page +1,
			loading: false
		}))
		window.scrollTo({
			top:0,
			behavior:'smooth'
		})
	}
	
	loadMore = (e) => {
		axios.get('https://api.unsplash.com/photos/?client_id=9b9b346cab5c970858f3e878816d0e93ce091d5d617bf30bb62a44cea72f71c5&per_page=16&page='+this.state.page)
		.then(res => this.setState({
			photos: res.data,
			page:this.state.page +1,
			loading: false
		}))
		window.scrollTo({
			top:0,
			behavior:'smooth'
		})
	}


	searchQueary = (e) => {
		this.setState({
			serach_Queary: e.target.value
		})
	}

	searchTrigger = (e) => {
		axios.get('https://api.unsplash.com/search/photos/?client_id=9b9b346cab5c970858f3e878816d0e93ce091d5d617bf30bb62a44cea72f71c5&per_page=16&query='+this.state.serach_Queary+'&page='+this.state.page)
			.then(res => this.setState( {
				photos: res.data.results,
				totalPage: res.data.total_pages,
				totalFound: res.data.total,
				page:2,
				loading: false,
				search: true
			}))
		e.preventDefault()
	}

	loadMoreSearchBtn = (e) => {
		axios.get('https://api.unsplash.com/search/photos/?client_id=9b9b346cab5c970858f3e878816d0e93ce091d5d617bf30bb62a44cea72f71c5&per_page=16&query='+this.state.serach_Queary+'&page='+this.state.page)
			.then(res => this.setState( {
				photos: res.data.results,
				page:this.state.page + 1,
				loading: false,
				search: true
			}))
		window.scrollTo({
			top:0,
			behavior:'smooth'
		})
	}
	render() {

		let searchHeading = ''
		let searchBtnMarkup = ''
		let totalPage = ''
		if(this.state.search) {
			searchHeading = <h3>You searched with <i>{this.state.serach_Queary}</i></h3>
			searchBtnMarkup = <button onClick={this.loadMoreSearchBtn} className="btn btn-success">Load Page {this.state.page}</button>
			totalPage = <p>Total Found {this.state.totalFound} | page {this.state.page -1} of {this.state.totalPage}</p>

		} else {
			searchHeading = <h3>Lates Photos</h3>
			searchBtnMarkup = <button onClick={this.loadMore} className="btn btn-success">Load Page {this.state.page}</button>
			totalPage = ''
		}

		if(this.state.loading) {
			return (
				<div className="row loading text-center"><div className="col">Loading</div></div>
			)
		}

		return (
			<React.Fragment>
				<div className="row headingText">
					<div className="col-md-6">
						{searchHeading}
						{totalPage}
					</div>
					<div className="col-md-6 text-right">
	                    <form onSubmit={this.searchTrigger}>
	                        <input type="text" onChange={this.searchQueary} placeholder="Search Keyword"/>
	                        <input type="submit" value="Search"/>
	                    </form>
	                 </div>	
				</div>

                 <div className="row">
				{
					this.state.photos.map((photo) => (
						<div className="col-lg-3" key={photo.id}>
							<div className="single-photo-item">
								<a className="d-block" href={'photo/photos?id=' + photo.id}>
								<div className="photo-wrapper"><img src={photo.urls.small} alt={photo.color}/></div>
									<h5>
										<img src={photo.user.profile_image.small} alt={photo.title}/>
										<span> {photo.user.name}</span>
									</h5>
								</a>
							</div>
						</div>
					))
				}
				</div>

				<div className="row">
					<div className="col-lg-12 text-center">
						<div className="loadMoreBtn">
							{searchBtnMarkup}
						</div>
					</div>
				</div>
				

			</React.Fragment>
			
		)
	}
}



                    