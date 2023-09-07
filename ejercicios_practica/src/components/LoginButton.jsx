import { useContext } from "react";
import Button from "./Button";
import {user} from "../context/CurrentUserContext";

export default function LoginButton() {
    const { currentUser, setCurrentUser } = useContext(user);
  
    if (currentUser.name !== "") {
      return <p>Hola {currentUser.name}, te esperábamos.</p>;
    }
  
    return (
      <Button
        onClick={() => {
          setCurrentUser({ name: "Ivo" });
        }}
      >
        Log in
      </Button>
    )};