import React from 'react';
import { EventListItem } from './eventListItem.jsx';

const EventsList = (props) => {
  return (
    <ul>
      {props.events.map(event => {
        return (
        <EventListItem event={event} key={event.id} removeEvent={props.removeEvent} />
        );
      })};
    </ul>
  );
};


export { EventsList };