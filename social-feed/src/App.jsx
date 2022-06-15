import React, { useState } from "react";
import CreatePost from "./Components/CreatePost";
import NavBar from "./Components/NavBar";
import PostMapper from "./Components/PostMapper";

function App() {
    //Stateful variables
    const [posts, setPosts] = useState([
        {
            id: 3,
            name: "Jake",
            message: "I like pizza!",
            isLiked: false,
            isDisliked: false,
        },
        {
            id: 2,
            name: "Pascal",
            message: "I like cereal!",
            isLiked: false,
            isDisliked: false,
        },
        {
            id: 1,
            name: "Amy",
            message: "I like flautas!",
            isLiked: false,
            isDisliked: false,
        },
    ]);

    function createPost(entry) {
        let tempEntries = [entry, ...posts];
        setPosts(tempEntries);
    }

    return (
        <div>
            <NavBar />
            <CreatePost createNewPost={createPost} array={posts} />
            <PostMapper array={posts} />
        </div>
    );
}

export default App;
