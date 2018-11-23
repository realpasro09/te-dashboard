import React from 'react';

const CardLayout = ({children, style, childrenStyle}) => {
    return (
        <div className={`jr-card`}>
            {children}
        </div>
    )
};

export default CardLayout;

