import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";





function AppRouter() {
    return (
        <div>
        <div className="container-fluid" style={{textAlign:"center"}}>
        <div className="jumbotron" style={{backgroundColor:"#7EB3FF",color:"white"}}>
          <h1>articles</h1>      
          <p>  </p>
          <button><Link className="nav-link" to={`/news`}>news</Link></button>
          <button><Link className="nav-link" to={`/sports`}>sports</Link></button>
        </div>
        
      </div>
    </div>
    );
}

export default AppRouter;