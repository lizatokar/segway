import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <header>
                    <Header data={this.props.data}/>
                </header>
                <main>
                    <Main data={this.props.data} buttons={this.props.buttons}/>
                </main>
                <footer>
                    <Footer data={this.props.data}/>
                </footer>
            </div>
        );
    }
}

export default App;
