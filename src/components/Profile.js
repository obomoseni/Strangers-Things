import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";
import { userFunc } from "../api";

const Profile = (props) => {
    const [content, setContent] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const displayUser = async () => {
            const profileUser = await userFunc()
            console.log(profileUser);
            console.log(profileUser.messages);
            setContent(profileUser.messages);
            setPosts(profileUser.posts);

        }
        displayUser();
    }, []);

    const clickSubmit = async (event) => {
        event.preventDefault();
        let sendContent = content.map(content => content=content._id); if( content.title == title && content.fromUser.username || posts.username ==! posts.username);
        console.log(content);
        const data = await userFunc(sendContent); 
    }

    return (
        <div id="profile">
            <div>
                <h1>Display Posts!</h1>
            </div>
            {
                posts.map(post => <div key={post._id}>
                    <div id="profile-1">
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <p>{post.price}</p>
                        <p>{post.author.username}</p>
                        <p>{post.updatedAt}</p>
                    </div>
                </div>)
            }
            <div>
                <h1>Display Messages!</h1>
            </div>
            {content.length === 0 ? <div>You have no messages</div>: <div>{content.map(content => <div key={content._id}>
                <div>
                    <h3>{content.post.title}</h3>
                    <p>{content.fromUser.username}</p>
                    <p>{content.content}</p>
                </div>
            </div>)
            } </div> 
        }
            <h1>Messages</h1>
            <form onSubmit={clickSubmit}>
                <label title="message">
                    Message:
                    <input className="text-box" type="textbox" />
                </label>
                <button className="button" type="submit">Submit</button>
            </form>
            <Link to="/posts" className="btn btn-primary">View posts</Link>
            <Logout />
        </div>

    );
};


export default Profile;
