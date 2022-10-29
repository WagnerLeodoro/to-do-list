import React, { FormEvent, InputHTMLAttributes, useState } from "react";
import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
  onTaskCompleted: (id: string) => void;
}

export function Task({ content, onDeleteTask, onTaskCompleted }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  function handleOnChange() {
    setIsChecked(!isChecked);
    setIsTaskCompleted(!isTaskCompleted);
    onTaskCompleted(content);
  }

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <div className={styles.inputBox}>
      <div className={styles.checkboxWrapper}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="taskCheck"
          name="taskCheck"
          checked={isChecked}
          onChange={handleOnChange}
        />
      </div>
      <div className={isChecked ? styles.checkedText : styles.uncheckedText}>
        <p>{content}</p>
      </div>
      <button title="Deletar comentário" onClick={handleDeleteTask}>
        <Trash size={14} />
      </button>
    </div>
  );
}
