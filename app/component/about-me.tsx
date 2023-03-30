import React from "react";

type AboutMeProps = {
  data: {
    title: string;
    body: string[];
  };
};
const AboutMe = ({ data }: AboutMeProps) => {
  const { title, body } = data;
  return (
    <section>
      <h1 className="mb-8">{title}</h1>
      {body?.map((el, i) => (
        <p key={`${el}_${i}`} className="mb-4">
          {el}
        </p>
      ))}
    </section>
  );
};

export default AboutMe;
