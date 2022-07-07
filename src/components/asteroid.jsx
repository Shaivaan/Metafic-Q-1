import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";

export const Asteroid = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const { state } = useLocation();
  console.log(state);
  useEffect(() => {
    setData(state);
  }, []);

  return (
    <div>
      <Link to="/">
        <Button variant="outlined">Home</Button>
      </Link>
      <br />
      <br />
      <br />  
      {data ? <>
        <div className="Box">
        <div className="sBox">
          <div>Name : {data ? data.name : ""}</div>
          <br />
          <br />
          <div>Eccentricity : {data ? data.orbital_data.eccentricity : ""}</div>
          <br />
          <br />
          <div>
            Orbit Uncertainity : {" "}
            {data ? data.orbital_data.orbit_uncertainty : ""}
          </div>
          <br />
          <br />
          <div>
            Observation Used : {data ? data.orbital_data.observations_used : ""}
          </div>
          <br />
          <br />
          <div>Mean Motion : {data ? data.orbital_data.mean_motion : ""}</div>
        </div>

        <div className="sBox">
          <div>
            Aphelion distance : {" "}
            {data ? data.orbital_data.aphelion_distance : ""}
          </div>
          <br />
          <br />
          <div>
            Data Arc (In Days) : {" "}
            {data ? data.orbital_data.data_arc_in_days : ""}
          </div>
          <br />
          <br />
          <div>Equinox : {data ? data.orbital_data.equinox : ""}</div>
          <br />
          <br />
          <div>
            Absolute Magnitude : {data ? data.absolute_magnitude_h : ""}
          </div>
          <br />
          <br />
          <div>
            Orbit determination date : {" "}
            {data ? data.orbital_data.orbit_determination_date : ""}
          </div>
        </div>
      </div>
      </> : "Loading..."}
    </div>
  );
};
