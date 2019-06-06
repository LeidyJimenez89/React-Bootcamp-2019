import React from "react";

class MovieCard extends React.Component {
  state = {
    checked: false
  };

  handleCheck = () => {
    this.setState(
      (state, props) => ({
        checked: !state.checked
      }),
      () => console.log("favourite added")
    );
  };

  static getDerivedStateFromProps(props, state) {
    console.log("get state from props");
    if (props.genre === "horror") {
      return {
        checked: true
      };
    }
    return null;
  }

  shouldComponentUpdate() {
    //Remember to return true or false
    return true;
  }

  componentDidMount() {
    //console.log(this.state)
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log(this.state)
  }

  componentWillUnmount() {
    console.log("I will unmount");
  }

  render() {
    return (
      <div className="movie-container">
        <h1>{this.props.original_title}</h1>
        <div>{this.props.original_language}</div>
        <div>{this.props.overview}</div>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  genre: "comedia"
};

export default MovieCard;
