import React from "react";
import { useState } from "react";
import Post from "./Post";

const PostMapper = ({ array }) => {
    // const [revArray, setRevArray] = useState(array.reverse());
    let revArray = [...array];
    revArray.reverse();
    return (
        <ul>
            {revArray.map((item) => (
                <li key={item.id}>
                    <Post post={item} />
                </li>
            ))}
        </ul>
    );
};
export default PostMapper;
