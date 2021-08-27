import { useEffect, useState } from "react";
import axios from "axios";
function Users() {
  const [users, setUsers] = useState([]);
  //veriler yüklenirken loading ekranı
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {isLoading && <div>Loading...</div>}
      {users.map((user) => (
        <div key={users.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Users;
