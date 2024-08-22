import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

const App = () => {
  const [user, setUser] = useState(null);

  const handleAuth = (userData) => setUser(userData);

  return (
    <div className="container">
      {user ? <Display user={user} /> : <Form handleAuth={handleAuth} />}
    </div>
  );
};

export default App;
