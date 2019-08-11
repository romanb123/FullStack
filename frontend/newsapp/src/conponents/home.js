import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";





function AppRouter() {
    return (
        <div>
        <div className="container">
        <div className="jumbotron">
          <h1>Bootstrap Tutorial</h1>      
          <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
        </div>
        <p>This is some text.</p>      
        <p>This is another text.</p>      
      </div>
            <div>
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/news">News</Link>
                        </li>
                    </ul>
                </nav>  
            </div>
    </div>
    );
}

export default AppRouter;