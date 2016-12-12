import React from 'react';

const EventListItem = (props) => {
  return (
    <ul className='item' onClick={function() { props.removeEvent(props.event.title); }}>
        <li>{props.event.title}</li>
        <li>{props.event.city_name}</li>
    </ul>
  );
};

export { EventListItem };