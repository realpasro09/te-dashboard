import React from "react";
import CardLayout from "../../CardLayout";

const CardProfile = ({ text, style, onEditProfile, id }) => {
	return (
		<div style={{ cursor: "pointer" }} >
			<CardLayout style={style} onEditProfile={onEditProfile} id={id}>
				<p className="card-subtitle">{text}</p>
			</CardLayout>
		</div>
	);
};

export default CardProfile;
