import React from "react";
import CreatePost from "./Components/CreatePost";
import NavBar from "./Components/NavBar";
import PostMapper from "./Components/PostMapper";

function App() {
    return (
        <div>
            <NavBar />
            <CreatePost />
            <PostMapper />
        </div>
    );
}

export default App;
