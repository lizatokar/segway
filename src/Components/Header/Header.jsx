import React from "react";
import "./Header.css";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="upperPart">
                    <div className="logo">
                        <img src={this.props.data.segwayLogo} alt="segway logo"/>
                        <p>US Segways</p>
                    </div>
                    <nav>
                        <div>
                            {this.props.data.links.map((link, index) => (
                                <a key={index} href="#">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </nav>
                    <a href="tel:+1 311-395-1395">+1 311-395-1395</a>
                </div>

                <div className="segways">
                    {this.props.data.segways.map((segway, index) => (
                        <div key={index} className="segway">
                            <img src={segway} alt={`Segway ${index + 1}`}/>
                        </div>
                    ))}
                </div>
                <div className="banner">
                    <p>Order a top-level segway and enjoy your ride!</p>
                </div>
            </div>
        );
    }
}

export default Header;
