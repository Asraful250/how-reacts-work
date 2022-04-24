import logo from './logo.svg';
import './App.css';
import Device from './components/Devices/Device';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name ="Uphone" price="22000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
