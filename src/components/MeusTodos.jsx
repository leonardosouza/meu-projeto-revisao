import { useState, useEffect } from "react";
import styles from "./MeusTodos.module.css";

export default function MeusTodos() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    buscarTarefas();
  }, []);

  function buscarTarefas() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => setTarefas(res));
  }

  return (
    <div className="todos">
      <h1 className="titulo">Minha Lista de tarefas</h1>
      <hr />
      <ul className={styles.lista}>
        {/* Aqui fazemos um laço pela lista de tarefas e retornamos uma lista de tags <li/> */}
        {tarefas.map((tarefa) => {
          return (
            <li key={tarefa.id} className={styles.listaItem}>
              {tarefa.title} -
              <span className={styles.status}>
                {tarefa.completed ? "Feita" : "A fazer"}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
