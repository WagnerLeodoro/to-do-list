import React from "react";
import Clipboard from "./assets/Clipboard.svg";
import styles from "./EmptyTask.module.css";

export function EmptyTask() {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={Clipboard} alt="bloco de anotações" />
      </div>
      <div>
        <p className={styles.title}>Você ainda não tem tarefas cadastradas</p>
        <p className={styles.subTitle}>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  );
}
