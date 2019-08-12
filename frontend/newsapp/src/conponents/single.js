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
      newcomment: {}
    };
  }
  postcomment = (e) => {
    console.log(e.target.value);
    this.setState({ newcomment: e.target.value })
  }
  sendcomment = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    axios
      .post(`http://localhost:3000/comments/` + this.props.match.params.id, this.state.newcomment)
      .then(res => {
        const data = res.data;
        console.log(data);
      });

  }
  componentDidMount() {
    axios.all([
      axios.get("http://localhost:3000/article/" + this.props.match.params.id),
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
        <div className="card" style={{ width: "40rem", margin: "auto", textAlign: "center" }}>
          <div className="card-body">
            <h5 className="card-title">{this.state.article.category}</h5>
            <h5 className="card-title">{this.state.article.title}</h5>
            <p className="card-text">{this.state.article.body}</p>
            <br></br> <br></br>
            {this.state.comments.map(onenew => (
              <div key={onenew.id}>
                <p>{"articleid:  " + onenew.article_id}</p>
                <p>{"commentbody:  " + onenew.body}</p>
                <p>{"comment-date:  " + onenew.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <h2>Fading Modal</h2>
          <p>Add the "fade" class to the modal container if you want the modal to fade in on open and fade out on close.</p>


          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
            Open modal
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
                      commentbody
    <input type="text" name="title" onChange={this.postcomment} />
                    </label>
                    <label>
                      commentbody
    <input type="text" name="name" onChange={this.postcomment} />
                    </label>
                    <label>
                      commentbody
    <input type="text" name="name" onChange={this.postcomment} />
                    </label>
                    <input type="submit" value="Отправить" />
                  </form>
                </div>


                <div className="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
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