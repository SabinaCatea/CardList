import { Component } from "react";

class Card extends Component {
  render() {
    //console.log(this.props);
    const { name, id, email } = this.props.monster;
    return (
      <div className="card-container">
        <img alt={name} src={`https://robohash.org/${id}`}></img>
        <h1 key={id}>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
