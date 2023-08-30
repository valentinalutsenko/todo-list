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
}

const TodoList = (props: PropsType) => {
  const [input, setInput] = React.useState("");

  const addNewTaskKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.charCode === 13) {
      props.addTask(input);
      setInput("");
    }
  };

  const onChangeHendler = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const addTaskButtonClick = () => {
    props.addTask(input);
    setInput("");
  };

  const taskList = props.task.map((t) => {
    return (
      <li key={t.id}>
        <input type="checkbox" checked={t.isDone} />
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
        />
        <button onClick={addTaskButtonClick}>+</button>
      </div>
      <ul>{taskList}</ul>
      <div>
        <button onClick={() => props.changeFilter("all")}>All</button>
        <button onClick={() => props.changeFilter("active")}>Active</button>
        <button onClick={() => props.changeFilter("complited")}>
          Complited
        </button>
      </div>
    </div>
  );
};

export default TodoList;
