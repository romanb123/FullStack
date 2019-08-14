import React, { Component } from 'react';
import axios from 'axios';

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      article: [],
      comments: [],
    };
  } 
  

  
  setcomment = (e) => {
    console.log(e.target.name);
    if(e.target.name==="title"){
    this.setState({ title: e.target.value });
    }
    else if(e.target.name==="body"){
      this.setState({ body: e.target.value });
    }  
  }

  sendcomment = (e) => {
    e.preventDefault();
    console.log("title    "+this.state.title);
    console.log("body    "+this.state.body);
    
    axios.post(`http://localhost:3000/comments/` + this.props.match.params.id,{title:this.state.title,body:this.state.body})
      .then(res => {
        const data = res.data;
        console.log(data);
      }).then(axios.all([
        axios.get("http://localhost:3000/game/" + this.props.match.params.id),
        axios.get("http://localhost:3000/comments/" + this.props.match.params.id)
      ]).then(res => {
        const articledata = res[0].data;
        const commentsdata = res[1].data;
        console.log(this.props.match.params.id);
        console.log(commentsdata);
  
        this.setState({ article: articledata[0], comments: commentsdata });
      }));

  }
  componentDidMount() {
    axios.all([
      axios.get("http://localhost:3000/game/" + this.props.match.params.id),
      axios.get("http://localhost:3000/comments/" + this.props.match.params.id)
    ]).then(res => {
      const articledata = res[0].data;
      const commentsdata = res[1].data;
      console.log(this.props.match.params.id);
      console.log(commentsdata);

      this.setState({ article: articledata[0], comments: commentsdata });
    })
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div className="card" style={{ width: "40rem", margin: "auto", textAlign: "center",backgroundColor:"#51EAFF" }}>
          <div className="card-body">
            <h5 className="card-title">{"category:  "+this.state.article.category}</h5>
            <h5 className="card-title">{"title:  "+this.state.article.title}</h5>
            <p className="card-text">{"body:  "+this.state.article.body}</p>
            <p className="card-text">{"id:  "+this.state.article.id}</p>
            <br></br> <br></br>
            {this.state.comments.map(onenew => (
              <div key={onenew.id} style={{backgroundColor:"#1EC9E8",color:"white"}}>
                <p>{"name:  " + onenew.name}</p> 
                <p>{"commentbody:  " + onenew.body}</p>
                <p>{"gameid:  " + onenew.game_id}</p>
                <p>{"commenid:  " + onenew.id}</p>
                <p>{"comment-date:  " + onenew.date}</p>
              
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
           add comment
  </button>

          <div className="modal fade" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">


                <div className="modal-header">
                  <h4 className="modal-title">Modal Heading</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>


                <div className="modal-body">
                  <form onSubmit={this.sendcomment}>
                    <label>
                      commentitle
    <input type="text" name="title" onChange={this.setcomment} />
                    </label>
                    <label>
                      commentbody
    <input type="text" name="body" onChange={this.setcomment} />
                    </label>
                    <br></br>
                    <input type="submit" value="addcomment" />
                  </form>
                </div>


                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Single;