import React from "react";
import "./result.scss";

const Result = ({ data }) => {
  return (
    <div className="result-container">
      <div className="result">
        <div className="title">IP ADDRESS</div>
        <div className="res">{data.ip}</div>
      </div>
      <div className="line"></div>
      <div className="result">
        <div className="title">Location</div>
        <div className="res">{data.location?.country}</div>
      </div>
      <div className="line"></div>
      <div className="result">
        <div className="title">Timezone</div>
        <div className="res">{data.location?.timezone}</div>
      </div>
      <div className="line"></div>
      <div className="result">
        <div className="title">isp</div>
        <div className="res">{data.isp}</div>
      </div>
    </div>
  );
};

export default Result;
