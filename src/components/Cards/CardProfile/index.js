import React from "react";
import CardLayout from "../../CardLayout";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

const CardProfile = ({ text, style, onEditProfile, id, onDeleteProfile }) => {
	return (
		<div style={{ cursor: "pointer", display: "flex", flexDirection: "row", alignItems:"center"}} >
			<div style={{flexDirection: "column", flex:0.95}}>
				<CardLayout style={style} onEditProfile={onEditProfile} id={id}>
					<p className="card-subtitle">{text}</p>
				</CardLayout>
			</div>
			<div style={{flexDirection: "column", flex:0.05}}>
				<span onClick={() => { onDeleteProfile(id); }}>
					<FontAwesomeIcon icon="trash" color="red" style={{marginLeft: 9, marginRight:10}}/>	
				</span>
			</div>
		</div>
	);
};

export default CardProfile;
