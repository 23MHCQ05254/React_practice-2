import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";
function CardCreatingFromUser() {

  const Fun = () => {
    setData([...Data, userData]);
    userData = {
      firstname: "",
      lastname: "",
      email: "",
    };
  };

  var userData = {
    firstname: "",
    lastname: "",
    email: "",
  };
  const [Data, setData] = useState([]);

  const GetData = (key, event) => {
    userData[key] = event.target.value;
  };

  return (
    <>
      <form>
        <div>
          <label>First Name : </label>
          <input
            type="text" required
            onChange={(event) => GetData("firstname", event)}
          />
        </div>

        <div>
          <label>Last Name : </label>
          <input type="text" onChange={(event) => GetData("lastname", event)} />
        </div>
        <div>
          <label>Email : </label>
          <input type="email" onChange={(event) => GetData("email", event)} />
        </div>
      </form>
      <button onClick={Fun}>Add Data</button>

      <div className="parent">
        {Data.map((ele, index) => {
          return (
            <div className="child">
              <div>First Name : {ele.firstname}</div>
              <div>Last Name : {ele.lastname}</div>
              <div>Email : {ele.email}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardCreatingFromUser;