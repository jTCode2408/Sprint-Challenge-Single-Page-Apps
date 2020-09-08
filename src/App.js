import React from "react";
import Header from "./components/Header.js";
import Router from './Router';
import SearchForm from "./components/SearchForm";
export default function App() {
  return (
    <main>
        <Header />
        
      <Router/>
      <SearchForm/>
    </main>
  );
}
