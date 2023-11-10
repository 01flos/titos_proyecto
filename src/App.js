import logo from './logo.svg';
import './App.css';
import LoginSignup from './Componets/LoginSignup/LoginSignup';
import LoginBienvenido from './Componets/LoginSignup/LoginBienvenido';
import InicioAdministrador from './Componets/InicioAdministrador/InicioAdministrador';

function App() {
  return (
    <div style={{display: 'flex'}}>
      <LoginBienvenido/>
      <LoginSignup/>
    </div>
  );
}

export default App;