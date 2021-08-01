import "./App.css";
import ReactTooltip from "react-tooltip";
import React from "react";
import moment from "moment";
import changes from "./changes.json";
import Timeline from "./Timeline";

const { counts } = changes;


function App() {
  let startDate = moment().add(-365, "days");
  let dateRange = [startDate, moment()];

  let data = Array.from(new Array(365)).map((_, index) => {
    if (moment(startDate).add(index, "day").format("YYYY-MM-DD") in counts) {
      return {
        date: moment(startDate).add(index, "day").format("YYYY-MM-DD"),
        count:
          counts[moment(startDate).add(index, "day").format("YYYY-MM-DD")]
            .count,
        changes:
          counts[moment(startDate).add(index, "day").format("YYYY-MM-DD")]
            .changes,
      };
    } else {
      return {
        date: moment(startDate).add(index, "day").format("YYYY-MM-DD"),
        count: 0,
        changes: [],
      };
    }
  });

  return (
    <div className="app">
      <h1>HEAT MAP</h1>
      <Timeline range={dateRange} data={data} />
      <ReactTooltip delayShow={50} />;
    </div>
  );
}

export default App;
