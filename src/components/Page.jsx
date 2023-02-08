import React from "react";
import Form from "./Form";
import Main from "./Main";
import {useState} from 'react'

const Page = () => {
  const [task, setTask] = useState("merhaba");
  const [date, setDate] = useState("06.02.2023");

  const [works, setWorks] = useState([
    { gorev: "homework", tarih: "06.02.2023" },
  ]);

  const addTask = () => {
    setWorks([...works, { gorev: task, tarih: date }]);
  };

  return (
    <div className="container-fluid d-flex row g-4">
      <Form setTask={setTask} setDate={setDate} addTask={addTask} />
      <Main works={works} />
    </div>
  );
};

export default Page;
