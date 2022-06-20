import React from "react";
import Pokemons from "./Components/Pokemons/Pokemons";
import Pokemons2 from "./Components/Pokemons2/Pokemons2";
import RickAndMorty from "./Components/RickAndMorty/RickAndMorty";
import AddProduct from "./Components/AddProduct/AddProduct";
import Users from "./Components/Users/Users";
import Header from "./Components/Header/Header";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    // указываем что роутинг будет в браузере
    <BrowserRouter>
      {/* header будет на всех наших страницах  */}
      <Header />
      <Routes>
        {/* непосредственно сами роутеры */}
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/Pokemons" element={<Pokemons />} />
        <Route path="/pokemons-2" element={<Pokemons2 />} />
        <Route path="/rick" element={<RickAndMorty />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
      {/* footer будет на всех страницах */}
      <h1>footer</h1>
    </BrowserRouter>
  );
};

export default App;
