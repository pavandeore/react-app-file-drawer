import React, { useState } from 'react';

const DownArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-chevron-down"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
};

function Drawer({ data }) {
  return (
    <div>
      <p>Drawer</p>

      {data.map((dat) => (
        <p>
          <p style={{ display: 'flex' }}>
            <span>{dat.title}</span>
            <span>
              <DownArrow />
            </span>
          </p>
          {dat.subFolder &&
            dat.subFolder.map((da) => (
              <p style={{ paddingLeft: '20px' }}> {da.title} </p>
            ))}
        </p>
      ))}
    </div>
  );
}

export default Drawer;
