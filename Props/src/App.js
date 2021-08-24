import "./App.css";
import User from "./components/User.js";
const friends = [
  { id: 1, name: "Seher" },
  { id: 2, name: "Betül" },
];
function App() {
  return (
    <div>
      <User
        name="Selin"
        surname="Dayıoğlu"
        isLoggedIn={true}
        age="21"
        friends={friends}
        address={{
          title: "Ankara",
          zip: 6980,
        }}
      />
    </div>
  );
}

export default App;
