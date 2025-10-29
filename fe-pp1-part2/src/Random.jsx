import React from "react";

function Random({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return <p>Random value between {min} and {max}: {randomNumber}</p>;
}

export default Random;
