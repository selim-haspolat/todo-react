import React from "react";

const Task = ({ t }) => {

  return (
    <div>
      <div className="card mb-5">
        <div className="card-header">{t.tarih}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{t.gorev}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Task;
