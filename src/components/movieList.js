import React, { Component } from "react";
import MovieCard from "./movieCard";
import AddMovie from "./addMovie";
import "./movieList.css";
import { connect } from "react-redux";
import { addMovie, modifyMovie } from "../actions/actions";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      edit: false,
      picture: "",
      title: "",
      date: "",
      rating: ""
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps.editMovie !== this.props.editMovie){ this.setState(
      {
        picture: this.props.editMovie.picture,
        title: this.props.editMovie.title,
        date: this.props.editMovie.date,
        rating: this.props.editMovie.rating
      }) }
 }
  addOne = () => {
    this.setState({
      visible: true
    });
  };
  edit = () => {
    this.setState(
      {
        picture: this.props.editMovie.picture,
        title: this.props.editMovie.title,
        date: this.props.editMovie.date,
        rating: this.props.editMovie.rating,
        edit: true,
      }
    );
    this.addOne();
  };
  close = e => {
    this.setState({
      edit: false,
      visible: false,
      picture: "",
      title: "",
      date: "",
      rating: ""
    });
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return  (
      <div>
        <div className="list">
          {this.props.list.map((el, i) => (
            <MovieCard movie={el} key={i} edit={this.edit} />
          ))}
          <AddMovie addOne={this.addOne} />
        </div>
        <div
          className="modal"
          style={{ display: this.state.visible ? "flex" : "none" }}
        >
          <p>Picture</p>
          <input
            type="text"
            name="picture"
            onChange={this.change}
            value={this.state.picture}
          />
          <p>Title</p>
          <input
            type="text"
            name="title"
            onChange={this.change}
            value={this.state.title}
          />
          <p>Date</p>
          <input
            type="text"
            name="date"
            onChange={this.change}
            value={this.state.date}
          />
          <p>Rating</p>
          <input
            type="number"
            name="rating"
            onChange={this.change}
            value={this.state.rating}
          />
          <div>
            <input
              type="button"
              onClick={() => {
                if (this.state.rating<6&&this.state.rating>0) {
                  const { title, picture, date, rating } = this.state;
                  const newMovie = { title, picture, date, rating };
                  !this.state.edit?this.props.addMovie(newMovie):this.props.modifyMovie(newMovie, this.props.inedx);
                  this.close();
                } else return alert("Please enter a valid rating");
              }}
              value={(!this.state.edit)?"Add":"Edit"}
            />
            <input type="button" onClick={this.close} value="Close" />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const editMovie= state.editReducer;
  return {
    editMovie,
  inedx: state.movieListReducer.findIndex(el => el === editMovie)}
}

const mapDispatchToProps = dispatch => ({
  addMovie: newMovie => {
    dispatch(addMovie(newMovie));
  }, 
  modifyMovie: (movie, i) => {
      dispatch(modifyMovie(movie, i))
  } 
});

const ConnectedMovieList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default ConnectedMovieList;
