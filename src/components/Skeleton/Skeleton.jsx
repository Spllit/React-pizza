import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
	<ContentLoader
		speed={2}
		width={400}
		height={600}
		viewBox="0 0 400 600"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}>
		<circle cx="172" cy="145" r="145" />
		<rect x="0" y="342" rx="6" ry="6" width="360" height="92" />
		<rect x="210" y="458" rx="30" ry="30" width="150" height="46" />
		<rect x="0" y="465" rx="6" ry="6" width="90" height="30" />
		<rect x="0" y="302" rx="6" ry="6" width="360" height="25" />
	</ContentLoader>
);

export default MyLoader;
