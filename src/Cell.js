import React from 'react';
import "./App.css";

function Cell({ data, max_min,onclick }) {
    const { MAX, MIN } = max_min;
    return (
      <div
        data-tip={`${data.count} changes on ${data.date}`}
        className="timeline-cells-cell"
        style={{
          backgroundColor: `rgba(0, 128, 0, ${
            1 - (MAX - data.count) / (MAX - MIN)
          })`,
        }}
        onClick={(e) => {
          onclick(data);
         }
        }
      ></div>
    );
  }

export default Cell
