import React, { useEffect, useState, useMemo } from "react";

const userId = 1;
const fetchUser = (id) => Promise.resolve([{ id: 1, name: "A" }, { id: 2, name: "B" }, { id: 3, name: "C" }]);
const fetchPosts = (userId) => Promise.resolve([
    { id: 1, title: "Post 1", content: "Content 1", likes: 10 },
    { id: 2, title: "Post 2", content: "Content 2", likes: 20 },
    { id: 3, title: "Post 3", content: "Content 3", likes: 30 },
]);

export const UserDashboard = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchUser(userId).then((data) => {
            console.log("data", data);
            setUser(data);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (!userId) return;
        fetchPosts(userId).then((res) => {
            setPosts(res);
        });
    }, [user]);

    const filteredPosts = useMemo(() => {
        console.log("Current filter term:", filter);
        console.log("Posts available:", posts);
        return posts.filter((p) => {
            console.log(`Comparing "${p.title}" with "${filter}"`);
            return p.title?.toLowerCase().includes(filter.toLowerCase());
        });
    }, [filter, posts]);

    const handleChange = (e) => {
        setFilter(e.target.value);
    };

    const totalLikes = posts.reduce((acc, p) => {
        return acc + p.likes;
    }, 0);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{user?.name}</h1>
            <input value={filter} onChange={handleChange} placeholder="Search posts" />

            <h3>Total Likes: {totalLikes}</h3>

            <ul>
                {filteredPosts.map((post, index) => (
                    <li key={post.id}>
                        <h4>{post?.title}</h4>
                        <p>{post?.content}</p>
                        <button onClick={() => setPosts(posts.splice(index, 1))}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
