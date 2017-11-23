import React from 'react';

export default class InstaPost extends React.Component {
	render() {
		return (
			<div>
		 <img src={this.props.image} alt={this.props.id} />
		 <p>{this.props.caption}</p>
		 <p>{this.props.likes} Likes</p>	
		</div>
		);
	}
}

// b3b4aa3d8b314197a58172cef2803fb1   <= client id
// secret client: 24569a98dac444a3b8718bbbd77a8a40
