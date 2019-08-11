import React, { Component } from 'react';
import axios from 'axios';

class Singlenews extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
    article:[],
    comments:[]
      };
    }
  
    componentDidMount() {
        axios.all([
            axios.get("http://localhost:3000/article/"+this.props.match.params.id),
            axios.get("http://localhost:3000/comments/"+this.props.match.params.id)
          ]).then(res => {
            const articledata = res[0].data;
            const commentsdata = res[1].data;
            console.log(this.props.match.params.id);
            console.log(commentsdata);

            this.setState({article:articledata[0],comments:commentsdata});
        })
    }
  
    render() {
        
        return (
           <div>
                <div className="card" style={{width: "40rem",margin:"auto",textAlign:"center"}}>
                 <div className="card-body">
                <h5 className="card-title">{this.state.article.title}</h5>
               <p className="card-text">{this.state.article.body}</p>
               {this.state.comments.map(onenew => (
                   <div key={onenew.id}>
             <p>{onenew.article_id}</p>
             <p>{onenew.body}</p>
             <p>{onenew.date}</p>
             </div>
            ))}
               
        </div>
          </div>
         
            </div>
        );

    }
  }

  export default Singlenews;