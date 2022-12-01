import axios from "axios";
import React, { useState } from "react";
import UsersOutput from "./UsersOutput";

const GithubUser = () => {
  const [inpData, setInpData] = useState("");
  const [data, setData] = useState({});
  const [isErr, setIsErr] = useState("");
  // https://api.github.com/users/
  const submitHandler = (e) => {
    e.preventDefault();
    if (!inpData) {
      alert("Invalid Input");
    } else {
      axios
        .get(`https://api.github.com/users/${inpData}`)
        .then((resp) => {
          console.log(resp.data);
          setData(resp.data);
        })
        .catch((err) => {
          console.log(err.message);
          setIsErr(err.message);
        });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h3>Find GitHub Users</h3>
          </div>
          <div className="col-md-12 mt-5">
            <form onSubmit={submitHandler}>
              <input
                onChange={(e) => setInpData(e.target.value)}
                value={inpData}
                type="text"
                placeholder="Username"
              />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div className="col-md-12">
            <small>{isErr !== "" && isErr}</small>
          </div>
        </div>
      </div>

      <UsersOutput data={data} />
    </div>
  );
};

export default GithubUser;
