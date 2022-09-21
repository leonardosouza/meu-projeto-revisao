import { useState, useEffect } from "react";

const meusTitulos = [
  { titulo: "Item 1", id: "1" },
  { titulo: "Item 2", id: "2" },
  { titulo: "Item 3", id: "3" },
  { titulo: "Item 4", id: "4" },
  { titulo: "Item 5", id: "5" },
];

export default function MinhaLista() {
  const [lista, setLista] = useState(meusTitulos);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    filtrar();
  }, [busca]);

  function filtrar() {
    if (busca) {
      const listaFiltrada = meusTitulos.filter((item) => {
        return item.titulo.toLowerCase().includes(busca.toLowerCase());
      });
      setLista(listaFiltrada);
    } else {
      setLista(meusTitulos);
    }
  }

  return (
    <div>
      <input
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="digite sua busca aqui"
      ></input>

      {lista.map((item) => {
        return <h2 key={item.id}>{item.titulo}</h2>;
      })}
    </div>
  );
}
