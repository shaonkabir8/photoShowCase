import React,{useState, useEffect} from 'react'
import axios from 'axios'

const LatestPhotos = () => {
	
	// State
	const [photos, setPhotos] = useState([]);
	const [pageNo, setPageNo] = useState(1);
	const [loading, setLoading] = useState(false);
	const [serachQueary, setSearchQuery] = useState('');
	const [search, setSearch] = useState(false);
	const [totalPage, setTotalPage] = useState(0);
	const [totalFound, setTotalFound] = useState(0);
	

	useEffect(() => {
		axios.get('https://api.unsplash.com/photos/?client_id=9b9b346cab5c970858f3e878816d0e93ce091d5d617bf30bb62a44cea72f71c5&per_page=16&page='+pageNo)
		.then(res => {
			setPhotos(res.data);
			setPageNo(pageNo+1);
			setLoading(false);
		})
		window.scrollTo({
			top:0,
			behavior:'smooth'
		})
	},[])

	
	// Methods
	const loadMore = (e) => {
		axios.get('https://api.unsplash.com/photos/?client_id=9b9b346cab5c970858f3e878816d0e93ce091d5d617bf30bb62a44cea72f71c5&per_page=16&page='+pageNo)
		.then(res => {
			setPhotos(res.data);
			setPageNo(pageNo+1);
			setLoading(false);
		})
		window.scrollTo({
			top:0,
			behavior:'smooth'
		})
	}


	const searchQueary = (e) => {
		setSearchQuery(e.target.value)
	}

	const searchTrigger = (e) => {
		axios.get('https://api.unsplash.com/search/photos/?client_id=9b9b346cab5c970858f3e878816d0e93ce091d5d617bf30bb62a44cea72f71c5&per_page=16&query='+serachQueary+'&page='+pageNo)
			.then(res => {
				setPhotos(res.data.results);
				setPageNo(2);
				setLoading(false);
				setSearch(true);
				setTotalFound(res.data.total);
				setTotalPage(res.data.total_pages);
			})
		e.preventDefault()
	}

	const loadMoreSearchBtn = (e) => {
		axios.get('https://api.unsplash.com/search/photos/?client_id=9b9b346cab5c970858f3e878816d0e93ce091d5d617bf30bb62a44cea72f71c5&per_page=16&query='+serachQueary+'&page='+pageNo)
			.then(res => {
				setPhotos(res.data.results);
				setPageNo(pageNo+1);
				setLoading(false);
				setSearch(true)
			});
			window.scrollTo({
			top:0,
			behavior:'smooth'
		})
	}
	

	// Logic
	let searchHeading = ''
		let searchBtnMarkup = ''
		let totalPageFound = ''
		if(search) {
			searchHeading = <h3>You searched with <i>{serachQueary}</i></h3>
			searchBtnMarkup = <button onClick={loadMoreSearchBtn} className="btn btn-success">Load Page {pageNo}</button>
			totalPageFound = <p>Total Found {totalFound} | page {pageNo -1} of {totalPage}</p>

		} else {
			searchHeading = <h3>Latest Photos</h3>
			searchBtnMarkup = <button onClick={loadMore} className="btn btn-success">Load Page {pageNo}</button>
			totalPageFound = ''
		}

		if(loading) {
			return (
				<div className="row loading text-center"><div className="col">Loading</div></div>
			)
		}


	return (
		<React.Fragment>
				<div className="row headingText">
					<div className="col-md-6">
						{searchHeading}
						{totalPageFound}
					</div>
					<div className="col-md-6 text-right">
	                    <form onSubmit={searchTrigger}>
	                        <input type="text" onChange={searchQueary} placeholder="Search Keyword"/>
	                        <input type="submit" value="Search"/>
	                    </form>
	                 </div>	
				</div>

                 <div className="row">
				{
					photos.map((photo) => (
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

export default LatestPhotos;

                    