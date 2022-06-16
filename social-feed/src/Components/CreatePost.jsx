import React, { useState } from "react";

const CreatePost = ({ createNewPost, array }) => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function getCurrentDate() {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        if (month === 6) {
            month = "June";
        }
        let currentDate = `${month} ${date}th`;
        return currentDate;
    }

    function handleCreate(event) {
        event.preventDefault();
        let newEntry = {
            id: array.length + 1,
            name: name,
            message: message,
            date: getCurrentDate(),
            isLiked: false,
            isDisliked: false,
        };
        createNewPost(newEntry);
    }

    return (
        <form className="create-post" onSubmit={(event) => handleCreate(event)}>
            <label className="label-name-message">Name</label>
            <input
                className="input-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <br />
            <label className="label-name-message">Post</label>
            <input
                className="input-message"
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <button className="create-button" type="submit">
                Create
            </button>
        </form>
    );
};

export default CreatePost;
