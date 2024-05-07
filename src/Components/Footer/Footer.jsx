import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <a href="tel:+1 311-395-1395">+1 311-395-1395</a>
                <p>4538 Fairfax Ave Culver City, C 89620</p>
                <p>US Segways © 2024</p>
            </div>
        );
    }
}

export default Footer;
