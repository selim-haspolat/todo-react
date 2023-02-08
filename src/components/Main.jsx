import React from "react";
import Task from "./Task";


const Main = ({ works }) => {
  console.log(works);

  return (
    <div className="d-flex flex-column-reverse col-12 col-md-6">
      {works.map((t) => {
        return (
          <div>
            <Task t={t} />
          </div>
        );
      })}
    </div>
  );
};

export default Main;
