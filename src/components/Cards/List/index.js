import React from "react";
import { card } from "./data";
import CardLayout from "components/CardLayout";
import CardProfile from "../CardProfile";

const style = {
	width: "250px",
	color: "white",
	minHeight: "30px",
};

const ListCard = ({ onEditProfile, profiles }) => {
	return (
		<div>
			{profiles.map((card, index) => (
				<CardProfile key={index} text={card.nombre} id={card._id} onEditProfile={onEditProfile} />
			))}
		</div>
	);
};

export default ListCard;
