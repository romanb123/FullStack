import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Football from './football';
import Basketball from './basketball';
import Single from './single';
import Home from './home';




function AppRouter() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/football">football</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/basketball">basketball</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path ="/football" exact component={Football} />
                <Route path="/basketball" exact component={Basketball} />
                <Route path ="/game/:id" component={Single} />
               
            </div>
        </Router>
    );
}

export default AppRouter;