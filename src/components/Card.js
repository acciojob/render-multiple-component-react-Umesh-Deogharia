import React from 'react'

const projects = [
  {
    name: "All in one",
    Desc: "This project is for all your needs",
  },
  {
    name: "All in one",
    Desc: "This project is for all your needs",
  },
  {
    name: "All in one",
    Desc: "This project is for all your needs",
  },
  {
    name: "exclusive",
    Desc: "This project is for all your needs",
  },
  {
    name: "All",
    Desc: "This project is for all your needs",
  },
  {
    name: "new",
    Desc: "This project is for all your needs",
  },
  {
    name: "one",
    Desc: "This project is for all your needs",
  },
];

const Card = () => {
  return (
    <div>
      Umesh Deogharia
      <div className="ns-wrapper">
        {projects.map((project) => (
          <>
            <h1 data-ns-test="project-name">{project.name}</h1>
            <h6 data-ns-test="project-description">{project.Desc}</h6>
          </>
        ))}
      </div>
    </div>
  );
}

export default Card
