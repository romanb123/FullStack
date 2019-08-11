import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import News from './news';
import Sport from './sport';


function Home() {
    return <h2>Home</h2>;
}
function Sport() {
    return <h2>sport</h2>;
}

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
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/news">News</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path ="/news" exact component={News} />
                <Route path="/sports" exact component={Sport} />
                <Route path ="/news/:id" component={SingleNews} />
                <Route path ="/sports/:id" component={SingleSports} />
            </div>
        </Router>
    );
}

export default AppRouter;