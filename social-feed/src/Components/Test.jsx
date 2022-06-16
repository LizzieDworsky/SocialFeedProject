import React from "react";
import { useState } from "react";

const Text = (props) => {
    const [bool, setBool] = useState(true);
    return <div onClick={() => setBool(!bool)}>{bool ? "Hello" : "World"}</div>;
};

export default Text;
