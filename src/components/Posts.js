import React, { useState } from "react";
import { getAllPosts, addPosts, deletePosts, editPost } from "../api";


const Posts = (props) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const posts = {
            title: title,
            description: description,
            price: price
        }
        const data = await addPosts(posts);
    }

    const deleteSubmit = async (event) => {
        event.preventDefault();
        let id
        posts.map(post => {
            if (post.title == title) {
                id = post._id
            }
        })
        console.log(title)
        const data = await deletePosts(id);
    }

    const editSubmit = async (event) => {
        event.preventDefault();
        console.log('title, description, price', title, description, price);
        const data = editPost();
    }

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [postId, setPostId] = useState(null);

    console.log('in post', { props });
    const { posts, setPosts } = props;
    return (
        <div id="posts">
            <form onSubmit={handleSubmit}>
                <div>Add post:</div>
                <label>
                    Title:
                    <input className="text-box" type="text" name="title" onChange={(event) => {
                        setTitle(event.target.value);
                    }} />
                </label>
                <label>
                    Description:
                    <input className="text-box" type="text" name="title" onChange={(event) => {
                        setDescription(event.target.value);
                    }} />
                </label>
                <label>
                    Price:
                    <input className="text-box" type="text" name="title" onChange={(event) => {
                        setPrice(event.target.value);
                    }} />
                </label>
                <button className="button" type="submit">Submit</button>
            </form>

            <form onSubmit={deleteSubmit}>
                <div>Delete post:</div>
                <label>
                    Title:
                    <input className="text-box" type="text" name="title" onChange={(event) => {
                        setTitle(event.target.value);
                    }} />
                </label>
                <button className="button" type="submit">Submit</button>
            </form>
            <h1 id="post-title">Posts</h1>
            {
                posts.map(post => <div key={post._id}>
                    <div id="post-1">
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <p>{post.price}</p>
                        <p>{post.author.username}</p>
                        <p>{post.updatedAt}</p>
                        <button onClick={editSubmit} className="button">Edit Post</button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Posts;