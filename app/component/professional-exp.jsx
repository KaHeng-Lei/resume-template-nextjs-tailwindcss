import React from "react";

const ProfessionalExp = ({ data }) => {
  const { title, experiences } = data;
  return (
    <div className="mt-8">
      <h1 className="mb-4">{title}</h1>
      {experiences?.map((exp) => {
        const { role, description, current } = exp;
        return (
          <div key={role} className="p-4 mb-4 shadow-lg shadow-slate-300/50">
            <h3
              className={`${
                current
                  ? "underline underline-offset-2 decoration-4 decoration-blue-700"
                  : "underline underline-offset-2 decoration-4 decoration-slate-200"
              } mb-4`}
            >
              {role}
            </h3>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProfessionalExp;
