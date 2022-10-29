import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";
import { EmptyTask } from "./components/EmptyTask";

import styles from "./App.module.css";
import "./global.css";
import { PlusCircle } from "phosphor-react";

interface Task {
  id: string;
  description: string;
  isComplete: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    if (newTask === "") {
      return;
    }
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        description: newTask,
        isComplete: isTaskCompleted,
      },
    ]);
    setNewTask("");
  }
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function handleIsComplete(id: string) {
    const newTaskArray = [...tasks].map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
        console.log(task);
      }
      return task;
    });
    setTasks(newTaskArray);
  }

  function handleDeleteTask(TaskId: string) {
    const newTaskArray = [...tasks].filter(({ id }) => {
      return id !== TaskId;
    });
    setTasks(newTaskArray);
  }

  const isNewTaskEmpty = newTask.length === 0;

  const completed: Task[] = tasks.filter((task) => task.isComplete === true);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.taskCreator} onSubmit={handleCreateNewTask}>
          <Input
            required
            name="task"
            value={newTask}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
          />
          <button type="submit" disabled={isNewTaskEmpty}>
            <p>Criar</p>
            <PlusCircle size={16} weight="bold" />
          </button>
        </form>
        <div className={styles.taskList}>
          <div className={styles.report}>
            <div className={styles.reportContent}>
              <div>
                <p className={styles.createdTask}>Tarefas Criadas</p>
              </div>
              <div className={styles.counterTask}>
                <p>{tasks.length}</p>
              </div>
            </div>
            <div className={styles.reportContent}>
              <div>
                <p className={styles.finishedTasks}>Concluídas</p>
              </div>
              <div className={styles.totalTask}>
                <p>{`${completed.length} de ${tasks.length}`}</p>
              </div>
            </div>
          </div>
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  content={task.description}
                  onTaskCompleted={() => handleIsComplete(task.id)}
                  onDeleteTask={() => handleDeleteTask(task.id)}
                />
              );
            })
          ) : (
            <EmptyTask />
          )}
        </div>
      </div>
    </div>
  );
}
