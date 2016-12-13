import React from 'react';

const EventListItem = (props) => {
  return (
    <div class='item' onClick={function() { props.removeEvent(props.event.title); }}>
        <p>{props.event.title}</p>
        <ul>
          <p>{props.event.city_name}</p>
        </ul>
    </div>
  );
};

export { EventListItem };