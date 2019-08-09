import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Clean Menu</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Waitings</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Add Order</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/table" className="nav-link">Add Table</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}