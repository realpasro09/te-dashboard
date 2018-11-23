import React from 'react';

const CardLayout = ({ children, style, childrenStyle, onEditProfile }) => {
	return (
		<div className={`jr-card`} onClick={onEditProfile}>
			{children}
		</div>
	)
};

export default CardLayout;
