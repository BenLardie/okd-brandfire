import logo from './logo.svg';
import './css/App.css';
import Nav from './Components/Nav';
import Lockup from './Components/Lockup';
import Form from './Components/Form';
import Footer from './Components/Footer';
import Leaves from './Components/Leaves';

function App() {
  return (
    <div className="App">
      <Nav />
      <Leaves />
      <main>
      <Lockup />
      <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
