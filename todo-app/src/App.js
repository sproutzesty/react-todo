
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import "./assets/styles.css";

import { useState } from "react";

import Tasks from "./components/Tasks";
import TaskEdit from "./components/TaskEdit";
import Header from "./components/Header";
import About from "./components/About";

import ContactForm from "./components/ContactForm";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  const [tasks, setTasks] = useState([
    {
      desc: "Learn React",
      id: 1,
      date: "2021-01-03",
      complete: false,
    },
    {
      desc: "Profit",
      id: 2,
      date: "2021-01-05",
      complete: false,
    },
  ]);

  const onTglStatus = (task) => {
    console.log("completing task");
    setTasks(
      tasks.map((chkTask) => {
        chkTask.complete =
          task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
        return chkTask;
      })
    );
  };

  const [showTaskEdit, setShowTaskEdit] = useState(false);
  

  const onSaveTask = ({ desc, date }) => {
    console.log("saving tasks");
    setTasks([
      { desc: desc, date: date, id: Date.now(), complete: false },
      ...tasks,
    ]);
  };

  return (
    <div className="App">
      <Router>
        <div className="container">
          <Header/>
          <Switch>
          <Route path ="/about" component={About} />
          <Route path ="/contactform" component={ContactForm} />
          </Switch>
        </div>
      </Router>
        <div className="container">
          <div className="col-12 text-right">
            <button
              className="button outline"
              onClick={() => setShowTaskEdit(!showTaskEdit)}>
              {!showTaskEdit && "New"}
              {showTaskEdit && "➖"}
            </button>
          </div>
          {showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask} />}
          <Tasks tasks={tasks} onTglStatus={onTglStatus}></Tasks>
        </div>
    </div>
  );
}

export default App;