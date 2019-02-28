import React, { Component } from "react";
import MovieCard from "./movieCard";
import AddMovie from "./addMovie";
import "./movieList.css";
import { connect } from "react-redux";
import { addMovie } from "../actions/actions";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  addOne = e => {
    this.setState({
      visible: true
    });
  };
 
  close = e => {
    this.setState({
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
    return (
      <div>
        <div className="list">
          {this.props.list.map(el => (
            <MovieCard movie={el} />
          ))}
          <AddMovie onAdd={this.addOne} />
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
            type="text"
            name="rating"
            onChange={this.change}
            value={this.state.rating}
          />
          <div>
            <input
              type="button"
              onClick={() => {
                if (this.state.rating.match(/[0-5]/g)) {
                const {title, image, year, rating} = this.state
                const newMovie = {title, image, year, rating}
                this.props.addMovie(newMovie);
                this.close()
                } else return alert("Please enter a valid rating");
              }}
              value="Add"
            />
            <input type="button" onClick={this.close} value="Close" />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMovie: newMovie => {
    dispatch(addMovie(newMovie));
  }
});

const ConnectedMovieList = connect(
  null,
  mapDispatchToProps
)(MovieList);

export default ConnectedMovieList;
