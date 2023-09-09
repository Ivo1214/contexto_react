import { useContext } from "react";
import {PruebaContext} from "../context/CurrentUserContext";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
    const { currentUser, setCurrentUser } = useContext(PruebaContext);
    const navigate = useNavigate();
  

    function handleSubmit(e) {
      e.preventDefault();
  
      const obj = {
        name: e.target.nombre.value,
        email: e.target.email.value,
      };
      setCurrentUser(obj);
      navigate("/");
    }
    
    return (
      <div className='formulario'>
        <form onSubmit={handleSubmit} className='login'>
          <input type='text' placeholder='Nombre:' name='nombre' />
          <input type='email' placeholder='Email:' name='email' />
          <input type='submit' value={"Enviar"} />
        </form>
      </div>
    )};