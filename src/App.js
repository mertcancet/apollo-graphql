import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;
const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto({ breed }) {
  const { loading, error, data, refetch } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
  });

  if (loading) return "loading...";
  if (error) return `Error! ${error}`;

  return (
    <div>
      <img
        src={data.dog.displayImage}
        alt="dog"
        style={{ height: 100, width: 100 }}
      />
      <button onClick={() => refetch()}>Refetch!</button>

      <button
        onClick={() =>
          refetch({
            breed: "dalmatian", // Always refetches a dalmatian instead of original breed
          })
        }
      >
        Refetch!
      </button>
    </div>
  );
}
function Dogs({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <select name="dog" onChange={onDogSelected}>
      {data.dogs.map((dog) => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
}

function App() {
  const [selectedDog, setSelectedDog] = useState("bulldog");

  function onDogSelected({ target }) {
    setSelectedDog(target.value);
  }
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      {selectedDog && <Dogs onDogSelected={onDogSelected} />}
      <DogPhoto breed={selectedDog} />
    </div>
  );
}

export default App;
