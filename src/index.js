import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getAllPosts, userFunc } from './api';
import { ErrorMessage, Login, Profile, Posts, Home, Register, Logout, Navbar, Title } from "./components/index"

const App = () => {
    const [posts, setPosts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState("");
    const [user, setUser] = useState({});


    useEffect(() => {
        const fetchPosts = async () => {
            const allPosts = await getAllPosts()
            setPosts(allPosts);
            const profileUser = await userFunc()
            console.log(profileUser);
            setUser(profileUser);
        }
        fetchPosts()

    }, [])

    // have a use effect (use for fetching data). Use the use effect to grab the funtion in API

    return (
        <div>
                <Title />
                <Navbar />
        
            <Routes>
                <Route path="/login" element={<Login setToken={setToken} />} />
                <Route path="/register" element={<Register setToken={setToken} />} />
                <Route path="/home" element={<Home />} />
                <Route path="/posts" element={<Posts posts={posts} setPosts={setPosts} />} />
                <Route path="/profile" element={<Profile user={user} />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<ErrorMessage />} />
            </Routes>


        </div>
    );
}



let appElement = document.getElementById('app');
const root = ReactDOM.createRoot(appElement);
root.render(<Router><App /></Router>);

