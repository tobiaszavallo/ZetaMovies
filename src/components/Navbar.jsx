import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="nav__contain">
            <div className="nav__containCenter">
                <div className="nav__title">
                    <Link to="/">
                        <h1 id="navnavnav">
                            ZETAMOVIES
                        </h1>
                    </Link>
                </div>
                <div className="nav__listaButton">
                    <Link to="/" className="nav__button">Home</Link>
                    {/* <Link to="/about"><li>About</li></Link> */}
                </div>
            </div>
        </nav>
    )
}