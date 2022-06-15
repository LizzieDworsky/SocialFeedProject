import React, { useState } from "react";

const CreatePost = ({ createNewPost, array }) => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function handleCreate(event) {
        event.preventDefault();
        let newEntry = {
            id: array.length + 1,
            name: name,
            message: message,
            isLiked: false,
            isDisliked: false,
        };
        createNewPost(newEntry);
    }

    return (
        <form onSubmit={(event) => handleCreate(event)}>
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
