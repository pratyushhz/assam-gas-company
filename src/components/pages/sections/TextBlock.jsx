import React from "react";

const TextBlock = ({ title, description, details }) => {
  return (
    <div className="text__block mb-30">
      <h5 className="text__block-title">{title}</h5>
      <p className="text__block-desc">{description}</p>
      {details.map((detail, index) => (
        <div key={index}>
          <h6>{detail.title}</h6>
          <p>{detail.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TextBlock;
