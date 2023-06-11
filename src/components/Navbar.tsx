import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="Navbar">
                    <a href="/website">
                        Homepage
                    </a> <br/>
                    <a href="/website/#/writing">
                        Writing
                    </a> <br/>
                    <a href="/website/#/library">
                        Libray
                    </a> <br/>
                    <a href="/website/#/games">
                        Games
                    </a> <br/>
                    <a href="/website/#/portfolio">
                        Portfolio
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar