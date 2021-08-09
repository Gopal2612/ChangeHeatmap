import React,{useState} from 'react';
import moment from "moment";
import Cell from './Cell';
import "./App.css";
import Footer from './Footer'


const DayNames = {
  1: "Mon",
  3: "Wed",
  5: "Fri",
};

const findMaxMin = (data) => {
    const arrayOfValues = [];
    let MAX, MIN;
    data.forEach((element) => {
      arrayOfValues.push(element.count);
    });
    MAX = Math.max(...arrayOfValues);
    MIN = Math.min(...arrayOfValues);
    return { MAX, MIN };
  };
  
  
  function Month({ startDate, index }) {
    let date = moment(startDate).add(index * 7, "day");
    let monthName = date.format("MMM");
    return (
      <div className={`timeline-months-month ${monthName}`}>{monthName}</div>
    );
  }
  
  function WeekDay({ index }) {
    return <div className="timeline-weekdays-weekday">{DayNames[index]}</div>;
  }

function Timeline({ range, data }) {
  const [isVisible, setisVisible] = useState(false)
  const [Data, setData] = useState({})
    let days = Math.abs(range[0].diff(range[1], "days"));
    let cells = Array.from(new Array(days));
    let weekDays = Array.from(new Array(7));
    let months = Array.from(new Array(Math.floor(days / 7)));
  
    let startDate = range[0];
    const max_min = findMaxMin(data);
  
    const handleOnClick = (data) => {
      setData(data)
      setisVisible(true)
  }

    return (
      <div className="timeline">
        <div className="timeline-months">
          {months.map((_, index) => (
            <Month key={index} index={index} startDate={startDate} />
          ))}
        </div>
  
        <div className="timeline-body">
          <div className="timeline-weekdays">
            {weekDays.map((_, index) => (
              <WeekDay key={index} index={index} startDate={startDate} />
            ))}
          </div>
  
          <div className="timeline-cells">
            {cells.map((_, index) => {
              let date = moment(startDate).add(index, "day");
              return (
                <Cell
                  key={index}
                  index={index}
                  max_min={max_min}
                  data={
                    data.filter(
                      (obj) => obj.date === moment(date).format("YYYY-MM-DD")
                    )[0]
                  }
                  onclick={handleOnClick}                
                  />
              );
            })}
          </div>
        </div>
        <div className="footer">
          <h1>Select a box to view Changes for that date</h1>
          {isVisible ? <Footer data={Data}/> :""}
        </div>
      </div>
    );
  }

export default Timeline
