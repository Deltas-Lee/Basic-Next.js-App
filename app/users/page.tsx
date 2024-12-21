import React from "react";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Users[] = await res.json();
  return (
    <>
      <b><h1>Users</h1></b>
      <div className="overflow-x-auto">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
            </tbody>
          </table>
      </div>
    </>
  );
};

export default UsersPage;

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}
