
import './App.css';
import Button from './components/Button';
import Greeting from './components/Greent';
import Form from './components/form';

function App() {
  return (
    <>
    <h1>1- Teste em Componente</h1>
    <Greeting name = "Cauã"/>
    <h1>2- Teste com evento</h1>
    <Button />
    <h1>3- teste em Formulario</h1>
    <Form />
    </>

  );
}

export default App;
