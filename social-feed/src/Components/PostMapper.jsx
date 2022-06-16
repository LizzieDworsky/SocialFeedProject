import React from "react";
import Post from "./Post";

const PostMapper = ({ array }) => {
    let revArray = [...array];
    revArray.reverse();
    return (
        <ul>
            {revArray.map((item) => (
                <li key={item.id}>
                    <Post post={item} />
                    <hr className="seperate-posts" />
                </li>
            ))}
        </ul>
    );
};
export default PostMapper;
