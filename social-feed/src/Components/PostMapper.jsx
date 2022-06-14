import React from "react";
import Post from "./Post";

const PostMapper = ({ array }) => {
    return (
        <ul>
            {array.map((item) => {
                <li>1</li>;
            })}
        </ul>
    );
};

export default PostMapper;
