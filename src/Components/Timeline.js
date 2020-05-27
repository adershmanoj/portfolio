import React, { memo } from "react";

function Timeline({ data }) {
  return (
    <ul className="timeline">
      {data.map((event) => (
        <li key={event.duration} className="timeline-event">
          <label className="timeline-event-icon"></label>
          <div className="timeline-event-copy">
            <p className="timeline-event-thumbnail">{event.duration}</p>
            <h3>{event.heading}</h3>
            <h4>{event.subHeading}</h4>
            <p>{event.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default memo(Timeline);
