import React from "react";
import { card } from "./data";
import CardLayout from "components/CardLayout";
import CardProfile from "../CardProfile";

const style = {
	width: "250px",
	color: "white",
	minHeight: "30px",
};

const ListCard = ({ onEditProfile }) => {
	return (
		<div>
			{card.map((card, index) => (
				<CardProfile key={index} text={card.text} onEditProfile={onEditProfile} />
			))}
		</div>
	);
};

export default ListCard;
