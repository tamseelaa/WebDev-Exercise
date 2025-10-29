import React from "react";

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", display: "flex", marginBottom: "10px" }}>
      <img src={picture} alt={`${firstName} ${lastName}`} style={{ width: "100px", marginRight: "10px" }} />
      <div>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height} cm</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
