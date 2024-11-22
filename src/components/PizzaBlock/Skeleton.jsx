import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (props) => (
	<ContentLoader
		className="pizza-block"
		speed={2}
		width={280}
		height={465}
		viewBox="0 0 280 465"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<circle cx="140" cy="130" r="130" />
		<rect x="422" y="263" rx="5" ry="5" width="200" height="30" />
		<rect x="77" y="267" rx="0" ry="0" width="10" height="0" />
		<rect x="0" y="310" rx="5" ry="5" width="280" height="88" />
		<rect x="316" y="340" rx="15" ry="15" width="80" height="30" />
		<rect x="388" y="267" rx="5" ry="5" width="65" height="20" />
		<rect x="0" y="270" rx="5" ry="5" width="280" height="27" />
		<rect x="0" y="420" rx="5" ry="5" width="70" height="27" />
		<rect x="120" y="408" rx="25" ry="25" width="150" height="45" />
	</ContentLoader>
)