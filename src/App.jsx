import MeuComponente from "./components/MeuComponente";
import MeuContador from "./components/MeuContador";
import MeusTodos from "./components/MeusTodos";
import MinhaLista from "./components/MinhaLista";

export default function App() {
  return (
    <div>
      <h1>Meu App</h1>
      <hr />
      <MeuComponente titulo="Olá país" />
      <MeuComponente titulo="Olá estado" />
      <MeuComponente titulo="Olá cidade" />
      <hr />
      <MeuContador />
      <hr />
      <MinhaLista />
      <hr />
      <MeusTodos />
    </div>
  );
}
