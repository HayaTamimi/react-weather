import React from "react";
import "./Weather.css"

export default function Weather() {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li> Sunday 07:00</li>
          <li> Rain</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src="pic" />6 degree
          </div>
          <div className="col-6">
            <ul>
              <li> Humidity: 72% </li>
              <li>Wind: 13 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}