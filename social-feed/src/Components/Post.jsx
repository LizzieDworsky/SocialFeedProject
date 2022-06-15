import React from "react";

const Post = ({ post }) => {
    function isLikedPressed(event) {
        // event. somthing needs to happen here, need to have the onclick event cause the boolean value change
        // isLiked = !isLiked
    }

    return (
        <div>
            <h3>{post.name}</h3>
            <p>{post.message}</p>
            <button>{post.isLiked}</button>
            {/* onclick= anon function call */}
            <button>{post.isDisliked}</button>
        </div>
    );
};

export default Post;
