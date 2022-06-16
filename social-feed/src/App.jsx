import React, { useState } from "react";
import CreatePost from "./Components/CreatePost";
import NavBar from "./Components/NavBar";
import Test from "./Components/Test";
import PostMapper from "./Components/PostMapper";

function App() {
    //Stateful variables
    const [posts, setPosts] = useState([
        {
            id: 1,
            name: "Jake",
            message: "I like pizza!",
            date: "June 5th",
            isLiked: false,
            isDisliked: false,
        },
        {
            id: 2,
            name: "Pascal",
            message: "I like cereal!",
            date: "June 8th",
            isLiked: false,
            isDisliked: false,
        },
        {
            id: 3,
            name: "Amy",
            message: "I like flautas!",
            date: "June 9th",
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
            <Test />
        </div>
    );
}

export default App;
