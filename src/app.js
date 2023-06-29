import './app.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './Navigation'
import LoginForm from './LoginForm'


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;