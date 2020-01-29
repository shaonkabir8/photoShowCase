import React,{ Fragment, useState, useEffect } from 'react'
import axios from 'axios'



const Photo = () => {

	const [ photo, setPhoto ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ collection, setCollection ] = useState([]);

	
	useEffect(() => {
		// grab the photo_id from url using JavaScript Build-in "URLSearchParams" Constructor
		let search = window.location.search;
		let params = new URLSearchParams(search);
		let photo_id = params.get('id');
		

		axios.get('https://api.unsplash.com/photos/' + photo_id + '/?client_id=9b9b346cab5c970858f3e878816d0e93ce091d5d617bf30bb62a44cea72f71c5')
			.then(res => {
				setPhoto(res.data);
				setLoading(false);
				setCollection(res.data.related_collections.results)
			})
			.catch(err => console.log(err));
	},[])


	return (
		<Fragment>
			<div className="single-photo-wrapper">
				<div className="single-photo-info">
					{photo.title ? <h3>{photo.story.title}</h3> : ''}
					{photo.description ? <p>{photo.description}</p> : ''}
					<ul>
						<li>
							<label htmlFor="uploaded_by">Uploaded by: </label>
							{photo.user && photo.user.first_name ? photo.user.first_name: ''}
						</li> 

						{photo.updated_at ? <li>
							<label htmlFor="upload_date">Upload date: </label>
							{photo.updated_at} </li> : '' }

						{photo.exif && photo.exif.model ? <li>
							<label htmlFor="camera_model">Camera Model: </label>
							{photo.exif.model} </li> : '' }

						{photo && photo ? <li>
							<label htmlFor="regulation">Regulation: </label>{`${photo.
							width} x ${photo.height}`} </li> : '' }
					</ul>
					<a href="/" className="photo-info-btn">
						<i className="fas fa-share"></i>
					</a>
					<a href={photo.links && photo.links.download} className="photo-info-btn">
						<i className="fas fa-download"></i>
					</a>
				</div>
				<img src={photo.urls && photo.urls.full} alt={photo.title}/>
			</div>
			<div className=" related">
				{
					collection.map(relatedInfo => {
						relatedInfo.preview_photos.map(photo => (
							<a href={photo.urls.small} key={photo.title}>
								<img src={photo.urls.thumb} alt={photo.title}/>
							</a>
				 			
						))
					})
				}
			</div>
		</Fragment>
	)
}

export default Photo