import './styles/main.scss'
import Router from './comps/router'
import {UserProvider} from './context';

function App() {
  return (
    <UserProvider>
      <Router/>
    </UserProvider>
  );
}

export default App;
