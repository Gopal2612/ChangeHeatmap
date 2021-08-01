import React from 'react';
import "./App.css";

function Cell({ data, max_min }) {
    const { MAX, MIN } = max_min;
    const reqObj = data;
    return (
      <div
        data-tip={`${reqObj.count} changes on ${reqObj.date}`}
        className="timeline-cells-cell"
        style={{
          backgroundColor: `rgba(0, 128, 0, ${
            1 - (MAX - reqObj.count) / (MAX - MIN)
          })`,
        }}
        onClick={() => {
          if (document.getElementById("changes")) {
            document.body
              .getElementsByClassName("footer")[0]
              .removeChild(document.getElementById("changes"));
            document.body
              .getElementsByClassName("footer")[0]
              .removeChild(document.getElementById("changes2"));
          }
          var div = document.createElement("changes");
          var div1 = document.createElement("changes2");
          if (reqObj.changes.length > 0) {
            var ol = document.createElement("ol");
            for (var i = 0; i < reqObj.changes.length; i++) {
              var li = document.createElement("li");
              li.innerHTML = reqObj.changes[i].description;
              ol.appendChild(li);
            }
            div1.appendChild(ol);
          } else {
            var p = document.createElement("p");
            p.innerHTML = `${reqObj.count} changes `;
            div1.appendChild(p);
          }
          var h2 = document.createElement("h2");
          h2.innerHTML = `showing ${reqObj.count} changes occured on ${reqObj.date}`;
          div.appendChild(h2);
          div.id = "changes";
          div1.id = "changes2";
          document.body.getElementsByClassName("footer")[0].appendChild(div);
          document.body.getElementsByClassName("footer")[0].appendChild(div1);
        }}
      ></div>
    );
  }

export default Cell
