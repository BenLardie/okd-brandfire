import logo from './logo.svg';
import './css/App.css';
import Nav from './Components/Nav';
import Lockup from './Components/Lockup';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
      <Lockup />
      <Form />
      </main>
    </div>
  );
}

export default App;
