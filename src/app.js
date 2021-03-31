import React, {Component} from 'react';

import "./style/tailwind.css";
import "./style/fonts.css";



export default class App extends Component {
    state = {

    }

    render() {
        return (
            <div className="min-h-screen min-w-screen grid place-items-center">
                <div className="text-6xl text-center tracking-wide font-inter">
                    Trellix workshop quick start by Yannick
                </div>
            </div>
        );
    }
}