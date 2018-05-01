import React, { Component } from "react";

export default class TwitterButton extends Component {
    render() {
        const tag = this.props.hashTag || React.Children.only(this.props.children);
        return <a className="twitter-hashtag-button"
            href={`https://twitter.com/intent/tweet?button_hashtag=${tag}`}>Tweet #{tag}</a>
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.appendChild(document.createTextNode(`
        window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
      
        t._e = [];
        t.ready = function(f) {
          t._e.push(f);
        };
      
        return t;
        }(document, "script", "twitter-wjs"));`));

        document.body.appendChild(script);
    }
}