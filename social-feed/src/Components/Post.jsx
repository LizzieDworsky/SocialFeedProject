import React from "react";
import { useState } from "react";

const Post = ({ post }) => {
    // const [bool, setBool] = useState(false);
    const [isLiked, setIsLiked] = useState("inactive");
    const [isDisliked, setIsDisliked] = useState("inactive");

    function isLikedClicked() {
        if (isLiked === "inactive") {
            setIsLiked("isLiked");
            setIsDisliked("inactive");
        } else {
            setIsLiked("inactive");
        }
    }
    function isDislikedClicked() {
        if (isDisliked === "inactive") {
            setIsDisliked("isDisliked");
            setIsLiked("inactive");
        } else {
            setIsDisliked("inactive");
        }
    }

    return (
        <div className="post">
            <h3 className="name">{post.name}</h3>
            <h4 className="date">{post.date}</h4>
            <p className="message">{post.message}</p>
            <button
                className={isLiked}
                onClick={(event) => isLikedClicked(event)}
            >
                Like
            </button>
            <button
                className={isDisliked}
                onClick={(event) => isDislikedClicked(event)}
            >
                Dislike
            </button>
            {/* <button className={isLiked} onClick={() => setBool(!bool)}>
                {bool ? "IsLiked" : "inactive"}
                Test
            </button> */}
        </div>
    );
};

export default Post;
