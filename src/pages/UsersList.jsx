import '../styles/Login.css'

function UsersList({ users, showPasswords }) {
  return (
    <main className="text-page users-page">
      <h1>Registered Users</h1>
      <p className="page-subtitle">
        {showPasswords
          ? 'Admin mode: You can view all registered passwords.'
          : 'Passwords are hidden for non-admin users.'}
      </p>

      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <div className="users-table-wrap">
          <table className="users-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={`${user.email}-${user.username}`}>
                  <td>{index + 1}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{showPasswords ? user.password : '********'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
}

export default UsersList
