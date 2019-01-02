import React from 'react';

class SearchBar extends React.Component{


	state = {
		searchVal: ''
	}

	onFormSubmit = (event) =>{
		event.preventDefault();
		this.props.onSubmit(this.state.searchVal);
	}

	onInputChange = (event) =>{
		this.setState({searchVal: event.target.value});
	}


	render=() =>{
		return (
			<div className= "ui segment">
				<form onSubmit = {this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input type="text" value = {this.state.searchVal} onChange = {this.onInputChange}></input>
						{/* Without curly braces to avoid function call on load.
							Without (), its a reference to function. Can also use
							<input type="text" onChange = {(event)=> console.log(event.target.value)}></input>
							*/}
					</div>
				</form>
			</div>
		)
	}
};

export default SearchBar;