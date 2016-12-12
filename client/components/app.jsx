import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { EventInput } from './eventInput.jsx';
import { EventsList } from './eventsList.jsx';
import exampleData from './../exampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: exampleData
    };
  }
  componentWillMount() {
    const success = (data) => {
      this.setState({
        eventList: data
      });
    };
    $.ajax({
      url: 'http://127.0.0.1:3000/api/event',
      type: 'GET',
      dataType: 'json',
      success: success,
      error: function(xhr, textStatus, error) {
        console.log('text status', textStatus);
      }
    });
  }
  addEvent(newEvent) {
    this.setState({
      eventList: this.state.eventList.concat(newEvent)
    });
  }
  removeEvent(deleteEvent) {
    this.setState({
      eventList: this.state.eventList.filter( event => {
        return event.name !== deleteEvent;
      })
    });
  }
  render() {
    return (
      <div>
        <h1>Greenfield!</h1>
        <EventInput addEvent={this.addEvent.bind(this)} />
        <EventsList events={this.state.eventList} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));