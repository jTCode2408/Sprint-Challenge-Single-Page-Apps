import React from "react";
import {Toast, ToastBody} from "reactstrap";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
      <div className="p-3 bg-danger my-2 rounded">
        <Toast>
          <ToastBody>
          Welcome to the ultimate fan site!
          </ToastBody>
        </Toast>
      </div>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />

      </header>
    </section>
  );
}
