import React, { useState, useEffect, useCallback } from 'react';
 
const UserDashboard = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [logs, setLogs] = useState([]);
 
  useEffect(() => {
    fetch(`https://api.example.com/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
      });
 
    const interval = setInterval(() => {
      console.log(`Session active for user: ${user?.name}`);
    }, 5000);
  }, [userId]);
 
  const handleAsyncIncrement = () => {
    setTimeout(() => {
      setCount(prev => prev + 1 ); 
    }, 2000);
  };
 
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    const newLog = [...logs];
    newLog.push(`Searched for: ${search}`);
    setLogs(newLog);
  };
 
  const filteredItems = useCallback(() => {
    return user?.posts.filter(p => p.title.includes(search));
  }, [user, posts, search]);
 
  if (!user) {
    return <div>Loading...</div>;
  }
 
  return (
<div>
<h1>{user.name}'s Dashboard</h1>
<input 
        type="text" 
        value={search} 
        onChange={handleSearchChange} 
      />
<div>
<p>Counter: {count}</p>
<button onClick={handleAsyncIncrement}>Delayed Increment</button>
</div>
 
      <ul>
        {filteredItems().map(post => (
<li key={post.id}>{post.title}</li>
        ))}
</ul>
 
      <div className="logs">
        {logs.map((log, index) => (
<p key={index}>{log}</p>
        ))}
</div>
</div>
  );
};
 
export default UserDashboard;