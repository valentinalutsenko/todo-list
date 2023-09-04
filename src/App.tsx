import React from "react";
import { v1 } from "uuid";

import TodoList from "./components/TaskList";
import { task1 } from "./assets/tasks/tasks";

import "./App.css";

const initionState = task1;

export type FilterValueType = "all" | "complited" | "active";

function App() {
  const [task1, setTask1] = React.useState(initionState);
  const [filter, setFilter] = React.useState<FilterValueType>("all");

  // const [task2, useTask2] = React.useState();
  // const [task3, useTask3] = React.useState();

  const removeTask = (id: string) => {
    let filterTask = task1.filter((task) => task.id !== id);
    setTask1(filterTask);
  };

  const changeFilter = (value: FilterValueType) => {
    setFilter(value);
  };

  const addTask = (title: string) => {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...task1];
    setTask1(newTasks);
  };

  const changeStatus = (taskId: string, isDone: boolean) => {
    let task = task1.find((t) => {
      if (t.id === taskId) {
        return true;
      } else {
        return false;
      }
    });

    if (task) {
      task.isDone = isDone;
    }
    let copyTask = [...task1];
    setTask1(copyTask);
  };

  let filterForTask = task1;

  if (filter === "complited") {
    filterForTask = task1.filter((t) => t.isDone === true);
  }

  if (filter === "active") {
    filterForTask = task1.filter((t) => t.isDone === false);
  }

  return (
    <div className="App">
      <TodoList
        changeStatus={changeStatus}
        title="What to learn"
        task={filterForTask}
        taskRes={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        filter={filter}
      />
    </div>
  );
}

export default App;
