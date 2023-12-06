import React from "react";
import "./dots-container.styles.scss";

const Dots = ({ count, top }) => {
  return (
    <div className="">
      {[...Array(count)].map((e, i) => (
        <span className="circle-container" key={i}>
          {[...Array(!top ? count - 3 : count + 5)].map((e, i) => (
            <span className="circle" key={i}>
              ●
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default Dots;
