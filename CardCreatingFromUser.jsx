import "./App.css";
import { useState } from "react";

function CardCreatingFromUser() {
  const [Data, setData] = useState([]);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const Fun = (e) => {
    e.preventDefault(); // prevent page reload
    if (!userData.firstname || !userData.lastname || !userData.email) {
      alert("Please fill all fields");
      return;
    }
    setData([...Data, userData]);
    setUserData({ firstname: "", lastname: "", email: "" }); // reset inputs
  };

  const GetData = (key, event) => {
    setUserData({ ...userData, [key]: event.target.value });
  };

  return (
    <>
      <form onSubmit={Fun}>
        <div>
          <label>First Name : </label>
          <input
            type="text"
            required
            value={userData.firstname}
            onChange={(event) => GetData("firstname", event)}
          />
        </div>

        <div>
          <label>Last Name : </label>
          <input
            type="text"
            required
            value={userData.lastname}
            onChange={(event) => GetData("lastname", event)}
          />
        </div>
        <div>
          <label>Email : </label>
          <input
            type="email"
            required
            value={userData.email}
            onChange={(event) => GetData("email", event)}
          />
        </div>
        <button type="submit">Add Data</button>
      </form>

      <div className="parent">
        {Data.map((ele, index) => (
          <div key={index} className="child">
            <div>First Name : {ele.firstname}</div>
            <div>Last Name : {ele.lastname}</div>
            <div>Email : {ele.email}</div>
          </div>
        ))}
        
      </div>
    </>
  );
}

export default CardCreatingFromUser;
