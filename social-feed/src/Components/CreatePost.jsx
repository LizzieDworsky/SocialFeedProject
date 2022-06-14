import React, { useState } from "react";

const CreatePost = ({ createNewPost }) => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function handleCreate(event) {
        event.preventDefault();
        let newEntry = {
            id: Math.floor(Math.random() * 15 + 4),
            name: name,
            message: message,
            isLiked: false,
            isDisliked: false,
        };
        createNewPost(newEntry);
    }

    return (
        <form onSubmit={handleCreate}>
            <label>Name</label>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <label>Post</label>
            <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <button type="submit">Create</button>
        </form>
    );
};

export default CreatePost;
