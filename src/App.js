import axios from "axios";
import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import { useDispatch } from "react-redux";
import { addUsers } from "./redux/actions/actions";

function App() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const url = "https://reqres.in/api/users?page=2";

  useEffect(() => {
    axios.get(url).then((response) => {
      setUsers(response.data.data);
    });
  }, []);
  dispatch(addUsers(users));

  return (
    <div className="App">
      <CardList users={users} />
    </div>
  );
}

export default App;
