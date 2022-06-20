import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./RickAndMorty.css";
import { Rating } from "@mui/material";

const RickAndMorty = () => {
  const API = "https://rickandmortyapi.com/api/character";
  const [data, setData] = useState([]);
  async function getData() {
    let res = await axios(API);
    setData(res.data.results);
  }
  // console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2>RickAndMorty</h2>
      <div className="list">
        {data.map(item => (
          <div className="card" key={item.id}>
            <h4>{item.name}</h4>
            <img src={item.image} alt="" />
            <div>{item.status}</div>
            <div>{item.species}</div>
            <div>{item.gender}</div>
            <Rating name="simple-controlled" defaultValue={5} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickAndMorty;
