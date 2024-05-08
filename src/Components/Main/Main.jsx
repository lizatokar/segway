import "./Main.css";
import React from "react";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: {
                count: 1,
                segwayPrice: 975,
                delivery: 25,
                sum: 1000,
            },
            content: {
                img: this.props.buttons.one.img,
                heading: this.props.buttons.one.heading,
                p: this.props.buttons.one.p,
            },
        };
    }

    increment() {
        this.setState((prevState) => {
            const newSegwayPrice = prevState.number.segwayPrice + 975;
            const newCount = prevState.number.count + 1;
            const delivery =
                newCount >= 3 ? 0 : newCount === 1 || newCount === 2 ? 25 : 0;
            const sum = newSegwayPrice + delivery;

            return {
                number: {
                    ...prevState.number,
                    count: newCount,
                    segwayPrice: newSegwayPrice,
                    delivery: delivery,
                    sum: sum,
                },
            };
        });
    }

    decrement() {
        this.setState((prevState) => {
            const newSegwayPrice = prevState.number.segwayPrice - 975;
            const newCount = newSegwayPrice <= 0 ? 0 : prevState.number.count - 1;
            const finalSegwayPrice = newSegwayPrice <= 0 ? 0 : newSegwayPrice;
            const delivery =
                newCount >= 3 ? 0 : newCount === 1 || newCount === 2 ? 25 : 0;
            const sum = finalSegwayPrice + delivery;

            return {
                number: {
                    ...prevState.number,
                    count: newCount,
                    segwayPrice: finalSegwayPrice,
                    delivery: delivery,
                    sum: sum,
                },
            };
        });
    }

    reset() {
        this.setState((prevState) => ({
            number: {
                ...prevState.number,
                count: 0,
                segwayPrice: 0,
                delivery: 0,
                sum: 0,
            },
        }));
    }

    showButtonOne() {
        this.setState((prevState) => ({
            content: {
                ...prevState.content,
                img: this.props.buttons.one.img,
                heading: this.props.buttons.one.heading,
                p: this.props.buttons.one.p,
            },
        }));
    }

    showButtonTwo() {
        this.setState((prevState) => ({
            content: {
                ...prevState.content,
                img: this.props.buttons.two.img,
                heading: this.props.buttons.two.heading,
                p: this.props.buttons.two.p,
            },
        }));
    }

    showButtonThree() {
        this.setState((prevState) => ({
            content: {
                ...prevState.content,
                img: this.props.buttons.three.img,
                heading: this.props.buttons.three.heading,
                p: this.props.buttons.three.p,
            },
        }));
    }

    showButtonFour() {
        this.setState((prevState) => ({
            content: {
                ...prevState.content,
                img: this.props.buttons.four.img,
                heading: this.props.buttons.four.heading,
                p: this.props.buttons.four.p,
            },
        }));
    }

    render() {
        return (
            <div className="main">
                <div className="segwayDescription">
                    <div>
                        <h1>
                            Segway
                            <br/>
                            Ninebot
                            <br/>
                            GT2P
                            <br/>
                            Black
                        </h1>
                        <div className="segwayDetails">
                            <h3>Order your top-notch segway right now:</h3>
                            <div className="segwayOrder">
                                <div className="segwayOrderCalculation">
                                    <p className="orderTitles">Segway(s) Price:</p>
                                    <p className="orderNumbers">
                                        {this.state.number.segwayPrice}$
                                    </p>
                                </div>
                                <div className="segwayOrderCalculation">
                                    <p className="orderTitles">Quantity:</p>
                                    <p className="orderNumbers">{this.state.number.count}</p>
                                    <button onClick={() => this.increment()}>+</button>
                                    <button onClick={() => this.decrement()}>-</button>
                                    <button onClick={() => this.reset()}> reset</button>
                                </div>
                                <div className="segwayOrderCalculation">
                                    <p className="orderTitles">Delivery:</p>
                                    <p className="orderNumbers">{this.state.number.delivery}$</p>
                                </div>
                                <div className="segwayOrderCalculation">
                                    <p className="orderTitles">Total Sum:</p>
                                    <p className="orderNumbers">{this.state.number.sum}$</p>
                                </div>
                            </div>
                            <div className="buttons">
                                <button>BUY NOW</button>
                                <button>ADD TO BASKET</button>
                            </div>
                            <p className="deliveryInfo">*order more than 2 segways and get free delivery</p>
                        </div>
                    </div>

                    <img
                        src={this.props.data.segways[4]}
                        alt="first segway"
                        className="segwayImage"
                    />
                </div>

                <div className="four-buttons-description">
                    <div className="four-buttons">
                        <button onClick={() => this.showButtonOne()}>
                            Delivery within
                            <br/> 1 business day
                        </button>
                        <button onClick={() => this.showButtonTwo()}>
                            Basic 1 year
                            <br/> warranty
                        </button>
                        <button onClick={() => this.showButtonThree()}>
                            After Sales
                            <br/> Support
                        </button>
                        <button onClick={() => this.showButtonFour()}>
                            Up to 40 Miles
                            <br/> per charge
                        </button>
                    </div>
                    <div className="buttons-content">
                        <div className="buttons-content-text">
                            <h3>{this.state.content.heading}</h3>
                            <p>{this.state.content.p}</p>
                        </div>
                        <img
                            src={this.state.content.img}
                            alt="benefit logo"
                            className="images"
                        />
                    </div>
                </div>

                <div className="accessoriesSection">
                    <h2>Accessories</h2>
                    <div className="accessories">
                        <div className="certainAccessory">
                            <h3>Engine sound system</h3>
                            <p>
                                This integrated system accurately replicates the engine roar by
                                interpreting signals from the accelerator, brake, speed, and
                                other vehicle inputs.
                            </p>
                            <p className="price">$150.25</p>
                            <button>Add to basket</button>
                        </div>
                        <div className="certainAccessory">
                            <h3>Segway handlebar extension</h3>
                            <p>
                                Enhance your scooter control with this extension rod,
                                eliminating the need to hunch over and push, enabling effortless
                                portability wherever you go.
                            </p>
                            <p className="price">$35.20</p>
                            <button>Add to basket</button>
                        </div>
                        <div className="certainAccessory">
                            <h3>Segway helmet set</h3>
                            <p>
                                Crafted with a sleek, contoured helmet shell and premium
                                fabrics, this set offers style, protection, and high comfort for a
                                secure and fashionable ride.
                            </p>
                            <p className="price">$40.50</p>
                            <button>Add to basket</button>
                        </div>
                    </div>
                </div>

                <div className="segwayApp">
                    <h2>Segway App</h2>
                    <div className="segwayAppContent">
                        <p>
                            The new Segway Launcher app has added functionality for the T60
                            autonomous scooter and Segway e-Moped.
                        </p>
                        <p>
                            The Launcher app will automatically detect the vehicle category and
                            provide different support for each vehicle, ensuring that operators
                            have access to all of the key functions of a particular vehicle. For
                            example, operators can use Segway Launcher to lock or unlock the
                            tailbox of a Segway e-Moped.
                        </p>
                    </div>
                    <img src={this.props.data.appPicture} alt="segway app"/>
                </div>
            </div>
        );
    }
}

export default Main;
