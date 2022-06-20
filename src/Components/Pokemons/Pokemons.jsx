import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Pokemons = () => {
  const [inp1value, setInp1value] = useState("");
  const [inp2value, setInp2value] = useState("");

  // ! коллбэк отрабатывает один раз при рендере страницы, так как "массив зависимостей" пусто
  // useEffect(() => {console.log("useEffect!")}, []);
  // ! следит за изменениями в стейте inp1value
  // useEffect(() => {
  //   console.log("useEffect!");
  // }, [inp1value]);
  // ! следит за изменениями в стейте inp1value inp2value
  // useEffect(() => {
  //   console.log("useEffect!");
  // }, [inp1value, inp2value]);

  // ! следит за изменениями во всех стейтах
  // useEffect(() => {
  //   console.log("useEffect!");
  // });

  return (
    <div>
      pokemons
      <input
        value={inp1value}
        onChange={e => setInp1value(e.target.value)}
        type="text"
        placeholder="input 1"
      />
      <input
        value={inp2value}
        onChange={e => setInp2value(e.target.value)}
        type="text"
        placeholder="input-2"
      />
    </div>
  );
};

export default Pokemons;
