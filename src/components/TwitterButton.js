import React from "react";

export default ({ children, hashTag }) => {
    const tag = hashTag || React.Children.only(children);
    
    return <a className="twitter-hashtag-button"
        href={`https://twitter.com/intent/tweet?button_hashtag=${tag}`}>Tweet #{tag}</a>
};