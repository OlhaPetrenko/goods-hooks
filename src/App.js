import { useReducer } from "react";
import Gallary from "./components/Gallary/Gallary";
import Modal from "./components/Modal/Modal";

function reducer(state, action) {
  const { type, peyload } = action;

  switch (type) {
    case "id":
      return peyload;

    case "reset":
      return "";
    default:
      return state;
  }
}

function App() {
  const [id, dispatch] = useReducer(reducer, "");

  const onClick = (id) => {
    dispatch({ type: "id", peyload: id });
  };

  const onClose = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      {!!id && <Modal onClose={onClose} id={id} />}
      <Gallary onClick={onClick} />
    </div>
  );
}

export default App;
