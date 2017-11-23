import React from 'react';
import InstaPost from './InstaPost.js';

export default class InstaList extends React.Component {
		
	render() {
		const posts = this.props.posts && this.props.posts.map((post) => {
			return (<InstaPost key={post.id} {...post} />);
		});
		console.log(this.props.posts);
		return (
			<div>
			{posts}
			</div>
			);
	}
}
