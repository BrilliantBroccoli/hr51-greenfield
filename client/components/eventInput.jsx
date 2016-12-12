import React from 'react';

class EventInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ''
    };
  }
  handleChange(e) {
    this.setState({category: e.target.value });
  }
  handleClick() {
    this.props.addEvent(this.state);
    this.setState({
      category: ''
    });
  }
  render() {
    return (
      <form>
        <label>Enter a category:</label>
        <input type="text" value={this.state.category} placeholder="event category" onChange={this.handleChange.bind(this)}></input>
        <button type="button-default" onClick={this.props.addEvent.bind(this)}>Search</button>
      </form>
    );
  }
}


export { EventInput };