import { PlusCircle } from "phosphor-react";
import { FormEvent, InputHTMLAttributes, useState } from "react";
import styles from "./Input.module.css";

export function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus(event: FormEvent) {
    event.preventDefault();
    setIsFocused(!false);
  }

  function handleInputBlur(event: FormEvent) {
    event.preventDefault();
    setIsFocused(false);
  }

  return (
    <div>
      <input
        className={styles.input}
        placeholder={
          isFocused ? "Descrição da tarefa" : "Adicione uma nova tarefa"
        }
        type="text"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </div>
  );
}
