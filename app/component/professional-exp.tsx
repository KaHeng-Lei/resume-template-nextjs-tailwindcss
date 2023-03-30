import React from "react";

type ProfessionalExpProps = {
  data: {
    title: string;
    experiences: {
      role: string;
      description: string;
      current: boolean;
    }[];
  };
};

const ProfessionalExp = ({ data }: ProfessionalExpProps) => {
  const { title, experiences } = data;
  return (
    <section>
      <h1 className="mb-4">{title}</h1>
      {experiences?.map(({ role, description, current }) => {
        return (
          <div key={role} className="p-4 mb-4 shadow-lg shadow-slate-300/50">
            <h3
              className={`underline underline-offset-4 decoration-4 mb-4 ${
                current ? "decoration-blue-700" : "decoration-slate-200"
              } `}
            >
              {role}
            </h3>
            <p>{description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default ProfessionalExp;
