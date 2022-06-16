import React, { useState } from "react";
import CreatePost from "./Components/CreatePost";
import NavBar from "./Components/NavBar";
import PostMapper from "./Components/PostMapper";

function App() {
    //Stateful variables
    const [posts, setPosts] = useState([
        {
            id: 1,
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
            id: 3,
            name: "Amy",
            message: "I like flautas!",
            isLiked: false,
            isDisliked: false,
        },
    ]);

    function createPost(entry) {
        let tempEntries = [...posts, entry];
        setPosts(tempEntries);
    }

    return (
        <div className="body">
            <NavBar />
            <div className="form">
                <CreatePost createNewPost={createPost} array={posts} />
            </div>
            <div className="mapper">
                <PostMapper array={posts} />
            </div>
        </div>
    );
}

export default App;
