import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const getFnText = ()=>{
	return "Now!!";
}

const App = ()=>{
	const buttonText = "Click Me!" //Can have string, numbers, array of string, array of numbers... 
	//Cant use javascipt object. But can use object.property
	const style = {backgroundColor: "blue" , color: "white"}

	//Callbacks... Async await not available
	window.navigator.geolocation.getCurrentPosition(
		(position)=>console.log(position) ,
		(err) => console.log(err)
	);

	return (
		<div className="ui container comments">

			{/* Old div */}
			<div>
				<label className = "label" htmlFor="name" >Enter name:</label>
				<input id= "name" type="text" />
				<button style={style}>
					{buttonText} {getFnText()}
				</button>
			</div>
			{/* Old div close */}

			<ApprovalCard>
				<div>
					<h4>Warning</h4>
					Are you sure you want to continue?
				</div>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail author = "Ashu" timeAgo="Today at 07:15" comment = "First comment" dp = {faker.image.avatar()}/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author = "Utkarsh" timeAgo="Yesterday at 06:15" comment = "Second comment" dp = {faker.image.avatar()}/>
			</ApprovalCard>


			{/* Some comment------------------------------------------- */}
			


		</div>

	);
}

ReactDOM.render(
	<App />,
	document.querySelector("#root")
)