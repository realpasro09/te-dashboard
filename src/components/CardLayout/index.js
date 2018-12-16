import React from 'react';

const CardLayout = ({ children, style, childrenStyle, onEditProfile, id }) => {
	return (
		<div className={`jr-card`} onClick={() => { onEditProfile(id); }}>
			{children}
		</div>
	)
};

export default CardLayout;
