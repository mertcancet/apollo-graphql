import "./App.css";
import { useState } from "react";
import DelayedQuery from "./components/DelayedQuery";
import Dogs from "./components/Dogs";
import DogPhoto from "./components/DogsPhoto";
import AddTodo from "./components/AddTodo";
import Todos from "./components/GetTodo";

function App() {
  const [selectedDog, setSelectedDog] = useState("bulldog");

  function onDogSelected({ target }) {
    setSelectedDog(target.value);
  }
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      {/* {selectedDog && <Dogs onDogSelected={onDogSelected} />}
      <DogPhoto breed={selectedDog} />

      <hr />
      <DelayedQuery />
      <hr />
      <hr /> */}
      {/* <AddTodo /> */}

      {/* TODO useMutation ornegi */}
      <div>
        <h2>Building Mutation components 🚀</h2>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
