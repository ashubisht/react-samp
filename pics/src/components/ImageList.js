import React from "react";


const ImageList = (props) =>{

	const images = props.images.map(image =>{
		return (
			<img alt = {image.description} key = {image.id} src = {image.urls.small}></img>
		);
		
	});

	// Can also do
	// const images = props.images.map({description, id, urls} =>{  // Called destructirung the object
	// 	return (
	// 		<img alt = {description} key = {id} src = {urls.small}></img>
	// 	);
		
	// });



	return <div>{images}</div>
};

export default ImageList;