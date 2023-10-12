import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        title="Don't use insta!"
        href="https://www.instagram.com/"
        className="home__social-icon instagram"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/acdeepak/"
        className="home__social-icon linkedin"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/acdepak"
        className="home__social-icon github"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
