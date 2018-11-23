import React from "react";
import CardLayout from "../../CardLayout";

const CardProfile = ({ text, style }) => {
  return (
    <CardLayout style={style}>
      <p className="card-subtitle">{text}</p>
    </CardLayout>
  );
};

export default CardProfile;
