import React from "react";

const User = (props) => {
  const { users, deleteUser } = props;
  let length = users.length;
  const list = length ? (
    users.map((user) => {
      return (
            <div className="col-sm-4 mb-4" key={user.id}>
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title"><b>Name :</b> {user.name}</h5>
                    <p className="card-text"> <b>Age :</b> {user.age}</p>
                    <button className="btn btn-danger" onClick={()=>{deleteUser(user.id)}}>Delete this user</button>
                </div>
                </div>
            </div>
      );
    })
  ) : (
    <div className="row">
        <div className="alert alert-danger">
            <p className="text-center">No users exist</p>
        </div>
    </div>
  );

  return (
    <div className="row mt-5">
            {list}
    </div>
  )
};
export default User;
