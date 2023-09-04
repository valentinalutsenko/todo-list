import React, { ChangeEvent, KeyboardEvent } from "react";
import { FilterValueType } from "../App";

export interface TaskType {
  id: string;
  title: string;
  isDone: boolean;
}

interface PropsType {
  title: string;
  task: TaskType[];
  taskRes: (id: string) => void;
  changeFilter: (value: FilterValueType) => void;
  addTask: (title: string) => void;
  changeStatus: (taskId: string, isDone: boolean) => void;
  filter: FilterValueType;
}

const TodoList = (props: PropsType) => {
  const [input, setInput] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  const addNewTaskKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (event.charCode === 13) {
      props.addTask(input);
      setInput("");
    }
  };

  const onChangeHendler = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const addTask = () => {
    if (input.trim() !== "") {
      props.addTask(input);
      setInput("");
    } else {
      setError("Field is required");
    }
  };

  const taskList = props.task.map((t) => {
    const onChangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
      props.changeStatus(t.id, event.target.checked);
    };
    return (
      <li className={t.isDone ? "is-Done" : ""} key={t.id}>
        <input type="checkbox" onChange={onChangeStatus} checked={t.isDone} />
        <span>{t.title}</span>
        <button
          onClick={() => {
            props.taskRes(t.id);
          }}
        >
          x
        </button>
      </li>
    );
  });
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={input}
          onChange={onChangeHendler}
          onKeyPress={addNewTaskKeyPress}
          className={error ? "error" : ""}
        />
        <button onClick={addTask}>+</button>
        {error && <div className="error-message">{error}</div>}
      </div>
      <ul>{taskList}</ul>
      <div>
        <button
          className={props.filter === "all" ? "active-filter" : ""}
          onClick={() => props.changeFilter("all")}
        >
          All
        </button>
        <button
          className={props.filter === "active" ? "active-filter" : ""}
          onClick={() => props.changeFilter("active")}
        >
          Active
        </button>
        <button
          className={props.filter === "complited" ? "active-filter" : ""}
          onClick={() => props.changeFilter("complited")}
        >
          Complited
        </button>
      </div>
    </div>
  );
};

export default TodoList;
