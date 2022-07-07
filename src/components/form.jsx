import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';


export const Form = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState(true);
  const [isDisable, setisDisable] = useState(true);
  const navigate = useNavigate();
  const [rdata,setRdata] = useState([]);
  const [show,setShow] = useState(true);

    useEffect(()=>{
        getAllData();
    },[])


  const getData = (asteroid) => {

    setShow(false);
    fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${asteroid}?api_key=6XGdH0BMbjeWw5LA6BI88fhmTE4cxblcZUq2neyC`
    ).then((res) => {
      res
        .json()
        .then((res) => {
          navigate("/asteroid", { state: res });
          setData(res);
        })
        .catch((res) => {
          setData(false);
          setShow(true)
        });
    });
  };


  function getAllData(){

    fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=6XGdH0BMbjeWw5LA6BI88fhmTE4cxblcZUq2neyC").then((res)=>{
        res.json().then((res)=>{
            setRdata(res.near_earth_objects);
        })
    })
  }

  function getRandomData(){
    let num = Math.floor(Math.random()*19);
    navigate("/asteroid", { state: rdata[num] });
  }

  return (

    <>
    {show ?   <div className="main">

<Typography className="hed" variant="h4" gutterBottom component="div">
       Asteroid Finder
      </Typography>
    <br/>
      <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Asteroid Id"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        className="but"
        disabled={id.length == 0}
        onClick={() => {
          getData(id);
        }}
      >
        Submit
      </Button><br />

      <Button
        variant="outlined"
        onClick={getRandomData}
      >
        Random Asteroid
      </Button>

      <div>{!data ? "Oops! Asteroid Not Found" : ""}</div>
    </div>: <CircularProgress />}
   
    </>
  );
};
