import "../css/User.css";

const UsersOutput = (props) => {
  return (
    <div className="container">
      <div className="row mt-5 bg-dark p-4 text-white text-center">
        <div className="col-md-12">
          <h6>Name: {props.data.name}</h6>
        </div>
        <div className="col-md-6">
          <img
            src={props.data.avatar_url}
            alt="img"
            style={{ width: "150px", aspectRatio: "4/4", borderRadius: "10px" }}
          />
        </div>
        <div className="col-md-6 mt-4 d-flex text-center">
          <table>
            <thead>
              <tr>
                <th>Followers</th>
                <th>Following</th>
                <th>Public Repo</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.data.followers}</td>
                <td>{props.data.following}</td>
                <td>{props.data.public_repos}</td>
                <td>{props.data.location}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-12 mt-5">
          <a href={props.data.html_url} target="blank">
            <button className="btn text-white btn-success w-50">
              Go to {props.data.name} Profile
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UsersOutput;
