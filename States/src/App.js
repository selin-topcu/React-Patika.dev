import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Selin");
  const [age, setAge] = useState(21);
  const [friends, setFriends] = useState(["Betül", "Yasemin"]);
  const [address, setAddress] = useState({ title: "Ankara", zip: "11111" });
  return (
    <div className="App">
      <h1>
        {name} - {age}
      </h1>
      <button onClick={() => setName("Hasan")}>Change Name</button>
      <button onClick={() => setAge(23)}>Change Age</button>
      <hr />
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      {/* önceki verileri korumak için ...friends dizisi de eklenmeli */}
      <button onClick={() => setFriends([...friends, "Pelin"])}>
        Add New Friend
      </button>
      <hr />
      <h2>Address</h2>
      <div>
        {address.title} - {address.zip}
      </div>
      <button onClick={() => setAddress({ ...address, zip: 1122 })}>
        Adress Change
      </button>
    </div>
  );
}

export default App;
