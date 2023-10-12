import React from "react";
import { ReactComponent as Message } from "../assets/message.svg";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Deepak Acharya</h1>
      <h3 className="home__subtitle">Software Engineer</h3>
      <p className="home__description">
        I'm fueled by my passion for creativity and my unwavering commitment to
        delivering high-quality work.
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <Message />
      </a>
    </div>
  );
};

export default Data;
