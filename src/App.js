import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import Router from './Router';
import SearchForm from "./components/SearchForm";
export default function App() {
  return (
    <main>
      <Router/>>
      <Header />
      <SearchForm/>
      <CharacterList/>
    </main>
  );
}
