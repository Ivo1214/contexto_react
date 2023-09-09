// import './App.css';
import RouterPrincipal from './router/RouterPrincipal';
import { useState, useEffect } from 'react';

// Contexts
import {PruebaContext} from './context/CurrentUserContext';



function App() {
  let [currentUser, setCurrentUser] = useState ({name:"", email: ""});
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser){
      setCurrentUser(storedUser);
    }
  },[])

  useEffect(() => {
    localStorage.setItem("user", currentUser);
  }, [currentUser])

  return (
    <div className="App">
      <PruebaContext.Provider value={{currentUser, setCurrentUser}}>
        <header className="App-header">
          <RouterPrincipal></RouterPrincipal>
        </header>
      </PruebaContext.Provider>
    </div>
  );
}

export default App;
