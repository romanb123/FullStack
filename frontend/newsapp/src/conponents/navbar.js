import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
    return <h2>Home</h2>;
}

function News() {
    return <h2>news</h2>;
}

function Sport() {
    return <h2>sport</h2>;
}

function AppRouter() {
    return (
        <Router>
            <div>
                <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/news">News</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path="/news" component={News} />
                <Route path="/sports" component={Sport} />
            </div>
        </Router>
    );
}

export default AppRouter;