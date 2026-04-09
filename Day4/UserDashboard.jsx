import { useState, useEffect, useCallback } from 'react';


const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users"); // due to file not proper, it was giving a Error: Unexpected token '<', "<!doctype "... is not valid JSON
  const data = await response.json();
  return data.sort((a, b) => a.name.localeCompare(b.name)); // sorts in place
};


const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 10;

  const loadUsers = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []); // ← missing [filter] dep; stale closure
  // filter is not being used inside the function, incorrect comment added here


  useEffect(() => {
    loadUsers();
  }, [loadUsers]);


  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    setPage(1); // should also reset when filter changes, not just page
  }, [filter]);  // wrong dependency so changed it to filter 


  const handleRefresh = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const paginatedUsers = filteredUsers.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const totalPages = Math.ceil(filteredUsers.length / PAGE_SIZE);


  const UserRow = ({ user }) => (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td><StatusBadge status={user.status} /></td>
    </tr>
  );


  const StatusBadge = ({ status }) => {
    const statusStyles = {
      active: { bg: '#d1fae5', color: '#065f46' },
      inactive: { bg: '#fee2e2', color: '#991b1b' },
      pending: { bg: '#fef3c7', color: '#92400e' },
    };
    const style = statusStyles[status] ?? statusStyles['pending'];
    return (
      <span style={{ background: style.bg, color: style.color, padding: '2px 8px', borderRadius: 99 }}>
        {status}
      </span>
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          placeholder="Filter by name"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <button onClick={handleRefresh}>Refresh</button>
      </div>

      <table>
        <thead>
          <tr><th>Name</th><th>Email</th><th>Status</th></tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user) => (
            <UserRow key={user.id} user={user} /> //using index as key can cause incorrect re-renders when list changes
          ))}
        </tbody>
      </table>

      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>Prev</button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(p => p + 1)} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default UserDashboard;