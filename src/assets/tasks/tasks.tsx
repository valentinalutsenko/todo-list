import { TaskType } from "../../components/TaskList";
import { v1 } from "uuid";

export const task1: TaskType[] = [
  { id: v1(), title: "HTML&CSS", isDone: true },
  { id: v1(), title: "JS", isDone: true },
  { id: v1(), title: "REACT", isDone: true },
  { id: v1(), title: "TYPESCRIPT", isDone: false },
];

export const task2: TaskType[] = [
  { id: v1(), title: "Terminator", isDone: true },
  { id: v1(), title: "John Wick", isDone: false },
  { id: v1(), title: "Moth", isDone: true },
  { id: v1(), title: "Human anger", isDone: false },
];

export const task3: TaskType[] = [
  { id: v1(), title: "KILL DEM", isDone: true },
  { id: v1(), title: " Talibans", isDone: false },
  { id: v1(), title: "Asking", isDone: true },
  { id: v1(), title: "Sprinter", isDone: false },
];
