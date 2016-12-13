import React from 'react';

class EventInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
    };
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({category: e.target.value });
  }
  handleClick() {
    this.props.addEvent(this.state.category);
    this.setState({
      category: ''
    });
  }
  render() {
    return (
      <form>
        <div>
        <label>Enter a category:</label>
        </div>
        <div>
        <input type="text" value={this.state.category} placeholder="event category" onChange={this.handleChange.bind(this)}></input>
        <button type="button-default" onClick={this.handleClick.bind(this)}>Search</button>
        </div>
      </form>
    );
  }
}


export { EventInput };