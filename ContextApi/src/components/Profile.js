import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 1, username: "selind", bio: "biografii" });
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setUser(null);
  };

  console.log(user);
  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>{loading ? "loading" : "Login"}</button>
      )}

      {JSON.stringify(user)}
      <br />
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default Profile;
