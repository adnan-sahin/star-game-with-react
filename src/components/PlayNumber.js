import React from 'react';

const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue'
};

const PlayNumber = props => (
  <button
    style={{ backgroundColor: colors[props.status] }}
    className='number'
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

export default PlayNumber;
