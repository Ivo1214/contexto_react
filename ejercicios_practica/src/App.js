// import './App.css';
import RouterPrincipal from './router/RouterPrincipal';
import { useState } from 'react';

// Contexts
import {user} from './context/CurrentUserContext';

// Components
import Form  from './components/Form.jsx';


function App() {
  let [currentUser, setCurrentUser] = useState ({name:""});

  return (
    <div className="App">
      <user.Provider value={{currentUser, setCurrentUser}}>
        {/* <header className="App-header">
          <RouterPrincipal></RouterPrincipal>
        </header> */}
        <Form/>
      </user.Provider>
    </div>
  );
}

export default App;
