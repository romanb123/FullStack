import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";





function AppRouter() {
    return (
        <div>
        <div className="container-fluid" style={{textAlign:"center"}}>
        <div className="jumbotron" style={{backgroundColor:"#7EB3FF",color:"white"}}>
          <h1>games</h1>      
          <p>  </p>
          <button><Link className="nav-link" to={`/football`}>football</Link></button>
          <button><Link className="nav-link" to={`/basketball`}>basketball</Link></button>
        </div>
        
      </div>
    </div>
    );
}

export default AppRouter;