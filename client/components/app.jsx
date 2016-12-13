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
      eventList: []
    };
  }
  componentWillMount() {
    const success = (data) => {
      this.setState({
        eventList: data.events.event
      });
    };
    if (!!navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        $.ajax({
          url: 'http://127.0.0.1:3000/api/event',
          type: 'GET',
          dataType: 'json',
          data: {
            category: 'social',
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },
          success: success,
          error: function(xhr, textStatus, error) {
            console.log('text status', textStatus);
          }
        });
      });
    }
  }
  addEvent(category) {
    $.ajax({
      url: 'http://127.0.0.1:3000/api/event',
      method: 'GET',
      dataType: 'json',
      data: {
        category: category
      },
      success: function(data) {
        this.setState({
          eventList: this.state.eventList.concat(data.events.event)
        });
      },
      error: function(xhr, textStatus, error) {
        console.log('there\'s been an error retrieving the data');
      }
    });
  }
  removeEvent(deleteEvent) {
    console.log(deleteEvent, 'event to delete');
    this.setState({
      eventList: this.state.eventList.filter( event => {
        return event.title !== deleteEvent;
      })
    });
  }
  render() {
    return (
      <div>
        <h1>Today's Suggested Events</h1>
        <EventInput addEvent={this.addEvent.bind(this)} />
        <EventsList events={this.state.eventList} removeEvent={this.removeEvent.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));