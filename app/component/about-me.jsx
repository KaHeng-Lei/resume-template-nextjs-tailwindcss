import React from "react";

const AboutMe = ({ data }) => {
  const { title, body } = data;
  return (
    <div>
      <h1 className="mb-8">{title}</h1>
      <p className="mb-4">{body[0]}</p>
      <p className="mb-4">{body[1]}</p>
    </div>
  );
};

export default AboutMe;
