import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Basketball extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
    game:[]
      };
    }
  
    componentDidMount() {
        axios.get("http://localhost:3000/football")
        .then(res => {
            const gamedata = res.data;
            console.log(res.data);

            this.setState({game:gamedata});
        })
    }
  
    render() {
        
        return (
           <div>
            {this.state.game.map(onegame => (
                <div className="card" style={{width: "40rem",margin:"auto",textAlign:"center",backgroundColor:"#7EB3FF",color:"white"}} key={onegame.id}>
                 <div className="card-body">
                 <h5 className="card-title">{"game-id:  "+onegame.id}</h5>
                 <h5 className="card-title">{"game-category:  "+onegame.Category}</h5>
                 <h5 className="card-title">{"team-a:  "+onegame.teamA}</h5>
                 <h5 className="card-title">{"team-b:  "+onegame.teamB}</h5>
                 <p className="card-text">{"score-a:  "+onegame.scoreA}</p>
                 <p className="card-text">{"score-b:  "+onegame.scoreB}</p>
               <p className="card-text">{"time:  "+onegame.time}</p>
               <button><Link className="nav-link" to={`/game/${onegame.id}`}>read more</Link></button>
              

        </div>
          </div>
            ))}
            </div>
        );

    }
  }

  export default Basketball;